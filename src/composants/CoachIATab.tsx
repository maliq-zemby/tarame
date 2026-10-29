import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  User, 
  RotateCcw, 
  Compass, 
  GraduationCap,
  Award,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { ChatMessage, UserProfile } from '../types';

interface Props {
  user: UserProfile;
  initialPrompt?: string | null;
  onClearInitialPrompt?: () => void;
}

const PRESET_PROMPTS = [
  "Quelles sont les meilleures filières pour ma série ?",
  "Quels débouchés en Hôtellerie & Tourisme ou Gestion des institutions sanitaires ?",
  "Comment se former en Imagerie Médicale (Scanner, IRM) à l'USS Owendo ?",
  "Quelles opportunités entre Droit des affaires OHADA et Gestion des organisations ?",
  "Critères d'attribution de la bourse DGBS (âge ≤ 22 ans, moyenne)",
  "Comment poursuivre en Master et Doctorat (Ph.D.) au Gabon ?",
];

export const CoachIATab: React.FC<Props> = ({ user, initialPrompt, onClearInitialPrompt }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'coach',
      text: `Bonjour *${user.name}* ! 🇬🇦 Je suis *Mwali*, votre Coach et conseiller d'orientation universitaire Taramè pour le Gabon.

Je vois que vous êtes titulaire ou candidat de la *${user.bacSeries}* résidant à *${user.city}*.

Je suis spécialement formé pour vous guider sur :
* Les conditions d'attribution et démarches de la bourse *DGBS (e-Bourse)*.
* Les modalités d'admission dans les universités publiques (*UOB, USTM, USS, ENEF, INSG) et grandes écoles privées (BBS, EM-Gabon, ESGIS, IHEM*).
* Le choix de vos filières prioritaires selon votre série et les réalités du marché de l'emploi gabonais.

Posez-moi votre question ci-dessous ou cliquez sur une suggestion rapide !`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSendMessage(initialPrompt.trim());
      if (onClearInitialPrompt) {
        onClearInitialPrompt();
      }
    }
  }, [initialPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: 'user_' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Clé API Gemini introuvable dans les variables d'environnement.");
      }

      const chatHistory = messages.slice(-6).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }],
      }));

      const systemInstruction = Tu es Waii, coach d'orientation pour l'utilisateur ${user.name}, en série ${user.bacSeries} à ${user.city}.;

      const res = await fetch(https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: [
            ...chatHistory,
            { role: 'user', parts: [{ text: query }] }
          ]
        })
      });

      if (!res.ok) {
        throw new Error(Erreur réseau (${res.status}));
      }

      const data = await res.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Je n'ai pas pu générer une réponse. Veuillez réessayer.";

      const coachMsg: ChatMessage = {
        id: 'coach_' + Date.now(),
        sender: 'coach',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, coachMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: 'error_' + Date.now(),
        sender: 'coach',
        text: `Désolé ${user.name}, une erreur est survenue lors de la communication. 

Voici toutefois les points d'attention essentiels :
1. Pour la bourse *DGBS* : vérifiez que votre âge ne dépasse pas 22 ans et que vous avez la moyenne requise pour la ${user.bacSeries}.
2. Consultez l'onglet *Annuaire* pour les modalités d'accès et tenues exigées.
3. Vous pouvez également tester votre éligibilité dans l'onglet *Guide e-Bourse*.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (msgId: string, text: string) => {
    if (!('speechSynthesis' in window)) {
      alert("La synthèse vocale n'est pas supportée sur ce navigateur.");
      return;
    }

    if (speakingMessageId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMessageId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*_#•]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'fr-FR';
    utterance.rate = 1.0;

    utterance.onend = () => setSpeakingMessageId(null);
    utterance.onerror = () => setSpeakingMessageId(null);

    setSpeakingMessageId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    if (window.confirm('Voulez-vous réinitialiser la conversation avec le Coach Taramè ?')) {
      window.speechSynthesis?.cancel();
      setSpeakingMessageId(null);
      setMessages([
        {
          id: 'welcome_reset',
          sender: 'coach',
          text: Conversation réinitialisée. En quoi puis-je vous accompagner ${user.name} ?,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  const renderFormattedText = (rawText: string) => {
    return rawText.split('\n').map((line, index) => {
      if (!line.trim()) {
        return <div key={index} className="h-2"></div>;
      }

      if (line.startsWith('### ')) {
        return (
          <h4 key={index} className="font-bold text-slate-900 text-sm mt-3 mb-1">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('## ') || line.startsWith('# ')) {
        return (
          <h3 key={index} className="font-extrabold text-slate-900 text-sm sm:text-base mt-3 mb-1">
            {line.replace(/^#+\s*/, '')}
          </h3>
        );
      }

      const isBullet = line.startsWith('• ') || line.startsWith('- ') || /^\d+\.\s/.test(line);

      const parts = line.split(/(\\.?\\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('*') && part.endsWith('*')) {
          return (
            <strong key={pIdx} className="font-bold text-slate-950">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      return (
        <p key={index} className={text-xs sm:text-sm leading-relaxed ${isBullet ? 'pl-2 my-0.5' : 'my-1'}}>
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4.5rem)] md:h-[calc(100vh-5rem)] max-w-5xl mx-auto p-2 sm:p-4 pb-20 md:pb-4">
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-2xl p-4 mb-3 shadow-md border border-emerald-600/30 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-400 to-amber-300 flex items-center justify-center text-slate-950 font-black shadow-md">
              <Bot className="w-6 h-6 text-slate-900" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900" title="Coach en ligne"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-extrabold text-white">Coach Mwali • Taramè IA</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Spécialiste Gabon
              </span>
            </div>
            <p className="text-[11px] text-emerald-200/80">
              Expertise DGBS, orientation universitaire & carrières au Gabon
            </p>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
          title="Nouvelle conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Effacer</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-1 sm:px-2 space-y-4 rounded-2xl bg-slate-100/60 p-3 sm:p-4 border border-slate-200/70 shadow-inner">
        {messages.map((message) => {
          const isUser = message.sender === 'user';
          return (
            <div
              key={message.id}
              className={flex items-start gap-2.5 sm:gap-3 ${isUser ? 'flex-row-reverse' : ''}}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                  isUser
                    ? 'bg-gradient-to-tr from-amber-400 to-emerald-600 text-slate-950 font-bold text-xs'
                    : 'bg-emerald-700 text-amber-300 font-bold text-xs'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-3.5 sm:p-4 shadow-xs relative group ${
                  isUser
                    ? 'bg-emerald-700 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1 border-b border-black/5 pb-1 text-[10px] text-slate-400">
                  <span className={font-bold ${isUser ? 'text-emerald-100' : 'text-emerald-800'}}>
                    {isUser ? user.name : 'Coach Mwali'}
                  </span>
                  <span className={isUser ? 'text-emerald-200' : 'text-slate-400'}>
                    {message.timestamp}
                  </span>
                </div>

                <div className={isUser ? 'text-emerald-50 text-xs sm:text-sm' : 'text-slate-800'}>
                  {renderFormattedText(message.text)}
                </div>

                {!isUser && (
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-end gap-2 text-slate-400">
                    <button
                      onClick={() => handleSpeak(message.id, message.text)}
                      className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition ${
                        speakingMessageId === message.id
                          ? 'bg-emerald-100 text-emerald-800 font-bold'
                          : 'hover:text-slate-700 hover:bg-slate-100'
                      }`}
                      title={speakingMessageId === message.id ? 'Arrêter la lecture' : 'Écouter la réponse'}
                    >
                      {speakingMessageId === message.id ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-emerald-700" />
                          <span className="text-[10px]">Arrêter</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span className="text-[10px] hidden sm:inline">Écouter</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleCopy(message.id, message.text)}
                      className="p-1.5 rounded-lg hover:text-slate-700 hover:bg-slate-100 transition flex items-center gap-1"
                      title="Copier le texte"
                    >
                      {copiedId === message.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-[10px] text-emerald-600 font-bold">Copié</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] hidden sm:inline">Copier</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-amber-300 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-pulse" />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-xs border border-slate-200 text-slate-500 text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
              <span className="ml-1 text-[11px] text-slate-500 font-medium">
                Le Coach Mwali consulte les référentiels académiques gabonais...
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="my-2.5 overflow-x-auto no-scrollbar flex items-center gap-1.5 py-1 shrink-0">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide shrink-0 flex items-center gap-1">
          <Lightbulb className="w-3 h-3 text-amber-500" />
          Idées :
        </span>
        {PRESET_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            disabled={isLoading}
            className="whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-medium bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200/80 shadow-2xs transition active:scale-95 shrink-0 disabled:opacity-50"
          >
            {prompt}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2 bg-white rounded-2xl p-1.5 border border-slate-300 shadow-sm shrink-0 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={Posez votre question sur l'orientation, les écoles ou la DGBS...}
          className="flex-1 px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-hidden"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition active:scale-95 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5"
        >
          <span className="hidden sm:inline">Envoyer</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
