import React, { useState } from 'react';
import { SPRECHEN_TOPICS, SCHREIBEN_TOPICS } from '../data/sprechenSchreibenData';

const SprechenSchreiben = () => {
  const [currentMode, setCurrentMode] = useState('sprechen');
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [filterCat, setFilterCat] = useState('all-s');
  const [openCorrectionId, setOpenCorrectionId] = useState(null);

  const topics = currentMode === 'sprechen' ? SPRECHEN_TOPICS : SCHREIBEN_TOPICS;
  const isSprechen = currentMode === 'sprechen';

  const getFilteredTopics = () => {
    if (filterCat === 'all-s' || filterCat === 'all-w') return topics;
    return topics.filter(t => t.cat === filterCat);
  };

  const filteredTopics = getFilteredTopics();
  const selectedTopic = topics.find(t => t.id === selectedTopicId);

  const setMode = (mode) => {
    setCurrentMode(mode);
    setSelectedTopicId(null);
    setFilterCat(mode === 'sprechen' ? 'all-s' : 'all-w');
  };

  const filterTopics = (cat, el) => {
    setFilterCat(cat);
    setSelectedTopicId(null);
    // Mettre à jour les classes actives
    document.querySelectorAll(`#${currentMode}-filters .filter-chip`).forEach(f => {
      f.classList.remove('active-s', 'active-w');
    });
    el.classList.add(currentMode === 'sprechen' ? 'active-s' : 'active-w');
  };

  const selectTopic = (id) => {
    setSelectedTopicId(id);
    setOpenCorrectionId(null);
  };

  const closeWorkspace = () => {
    setSelectedTopicId(null);
    setOpenCorrectionId(null);
  };

  const toggleCorrection = () => {
    setOpenCorrectionId(openCorrectionId === selectedTopicId ? null : selectedTopicId);
  };

  const updateWordCount = (ta) => {
    const words = ta.value.trim() === '' ? 0 : ta.value.trim().split(/\s+/).length;
    const counter = document.getElementById('word-counter');
    if (counter) {
      counter.textContent = words + ' Wort' + (words > 1 ? 'e' : '');
      counter.className = 'word-counter' + (words >= 80 ? ' ok' : words >= 50 ? ' warn' : '');
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Hero */}
      <div className="text-center py-12 mb-8">
        <div className="inline-block bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
          Niveau B1 — ÖSD / Goethe
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-black mb-3">
          Sprechen <span className="text-yellow-400">&amp;</span> Schreiben
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Chaque sujet commence par une petite situation. Lisez la mise en contexte, puis répondez aux questions.
        </p>
      </div>

      {/* Mode Selector */}
      <div className="flex bg-[#1c2030] border border-[#2a2e3a] rounded-2xl p-1.5 mb-8 gap-1.5">
        <button
          onClick={() => setMode('sprechen')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
            currentMode === 'sprechen'
              ? 'bg-green-500/15 border border-green-500/30 text-green-400'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <span className="text-xl">🗣️</span> Sprechen
        </button>
        <button
          onClick={() => setMode('schreiben')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
            currentMode === 'schreiben'
              ? 'bg-blue-500/15 border border-blue-500/30 text-blue-400'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <span className="text-xl">✍️</span> Schreiben
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-5" id={`${currentMode}-filters`}>
        {isSprechen ? (
          <>
            <div className="filter-chip active-s" data-filter="all-s" onClick={(e) => filterTopics('all-s', e.currentTarget)}>Tous</div>
            <div className="filter-chip" data-filter="planen" onClick={(e) => filterTopics('planen', e.currentTarget)}>🤝 Gemeinsam planen</div>
            <div className="filter-chip" data-filter="praesentieren" onClick={(e) => filterTopics('praesentieren', e.currentTarget)}>🎤 Präsentation</div>
          </>
        ) : (
          <>
            <div className="filter-chip active-w" data-filter="all-w" onClick={(e) => filterTopics('all-w', e.currentTarget)}>Tous</div>
            <div className="filter-chip" data-filter="teil1" onClick={(e) => filterTopics('teil1', e.currentTarget)}>📧 Teil 1 — E-Mail</div>
            <div className="filter-chip" data-filter="teil2" onClick={(e) => filterTopics('teil2', e.currentTarget)}>💬 Teil 2 — Kommentar</div>
            <div className="filter-chip" data-filter="teil3" onClick={(e) => filterTopics('teil3', e.currentTarget)}>📬 Teil 3 — formelle E-Mail</div>
          </>
        )}
      </div>

      {/* Topic Grid */}
      {!selectedTopic && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredTopics.map(topic => (
            <div
              key={topic.id}
              className={`bg-[#151820] border border-[#2a2e3a] rounded-2xl p-5 cursor-pointer transition hover:border-gray-500 hover:-translate-y-0.5 ${
                selectedTopicId === topic.id ? (isSprechen ? 'border-green-500 bg-green-500/5' : 'border-blue-500 bg-blue-500/5') : ''
              }`}
              onClick={() => selectTopic(topic.id)}
            >
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <div className={`w-2 h-2 rounded-full ${isSprechen ? 'bg-green-400' : 'bg-blue-400'}`} />
                {isSprechen ? (topic.cat === 'planen' ? 'Gemeinsam planen' : 'Präsentation') : topic.teil}
              </div>
              <div className="font-bold text-white mb-1">{topic.title}</div>
              <div className="text-sm text-gray-400">{topic.sub}</div>
              <div className="flex gap-2 mt-3">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#242840] text-gray-400">
                  {topic.directions.length} consignes
                </span>
                {topic.correction && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                    ✓ Corrigé
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Workspace */}
      {selectedTopic && (
        <div className="mt-4 animate-fade-in">
          <div className="bg-[#151820] border border-[#2a2e3a] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-[#2a2e3a] bg-[#1c2030] flex-wrap gap-3">
              <h3 className="font-serif text-lg font-bold text-white">
                {isSprechen ? '🗣️' : '✍️'} {selectedTopic.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-3 py-1 rounded-full uppercase font-bold ${
                  isSprechen ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                }`}>
                  {isSprechen ? (selectedTopic.cat === 'planen' ? 'Planung' : 'Präsentation') : selectedTopic.teil}
                </span>
                <button onClick={closeWorkspace} className="w-7 h-7 rounded-full bg-[#242840] border border-[#2a2e3a] text-gray-400 hover:bg-red-500 hover:text-white transition flex items-center justify-center">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* Situation */}
              {selectedTopic.situation && (
                <div className="bg-yellow-500/5 border-l-3 border-yellow-500 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase mb-2">
                    <span>🎬</span> SITUATION
                  </div>
                  <div className="text-white italic">{selectedTopic.situation}</div>
                </div>
              )}

              {/* Tips */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 flex gap-3">
                <span className="text-blue-400 text-lg">💡</span>
                <span className="text-gray-300 text-sm">{selectedTopic.tips}</span>
              </div>

              {/* Directions */}
              <div className="bg-[#1c2030] border border-[#2a2e3a] rounded-lg p-5">
                <div className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  📋 Consignes
                </div>
                {selectedTopic.directions.map((dir, idx) => (
                  <div key={idx} className="flex gap-3 mb-2 text-sm text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-[#242840] flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{dir}</span>
                  </div>
                ))}
              </div>

              {/* Structure pour Schreiben */}
              {!isSprechen && selectedTopic.structure && (
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-5">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                    📐 Format
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="text-gray-500">Longueur:</span> {selectedTopic.structure.longueur}</div>
                    <div><span className="text-gray-500">Registre:</span> {selectedTopic.structure.registre}</div>
                    <div><span className="text-gray-500">Salutation:</span> {selectedTopic.structure.salutation}</div>
                    <div><span className="text-gray-500">Clôture:</span> {selectedTopic.structure.cloture}</div>
                  </div>
                </div>
              )}

              {/* Zone de réponse */}
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                  {isSprechen ? '📝 Vos notes / réponse (optionnel)' : '✍️ Votre texte'}
                </div>
                {isSprechen ? (
                  <textarea
                    className="w-full min-h-[120px] bg-[#1c2030] border border-[#2a2e3a] rounded-lg p-4 text-white font-mono text-sm resize-y focus:border-green-500 outline-none"
                    placeholder="Hier können Sie Ihre Antwort notieren oder im Heft üben..."
                  />
                ) : (
                  <>
                    <textarea
                      id="writing-text"
                      className="w-full min-h-[180px] bg-[#1c2030] border border-[#2a2e3a] rounded-lg p-4 text-white font-mono text-sm resize-y focus:border-blue-500 outline-none"
                      placeholder="Schreiben Sie Ihre E-Mail oder Kommentar hier..."
                      onInput={(e) => updateWordCount(e.target)}
                    />
                    <div id="word-counter" className="text-right text-xs text-gray-500 mt-1">0 Wörter</div>
                  </>
                )}
              </div>

              {/* Correction - VERSION CORRIGÉE */}
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg overflow-hidden">
                <button
                  className="w-full p-4 flex justify-between items-center text-yellow-500 font-bold text-sm hover:bg-yellow-500/10 transition"
                  onClick={toggleCorrection}
                >
                  <span className="flex items-center gap-2">
                    <span>📖</span>
                    {selectedTopic.correction ? 'Voir un exemple de corrigé' : 'Corrigé - écrivez votre réponse d\'abord'}
                  </span>
                  <span className={`text-lg transition-transform duration-200 ${openCorrectionId === selectedTopicId ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {openCorrectionId === selectedTopicId && selectedTopic.correction && (
                  <div className="p-4 pt-0 border-t border-yellow-500/20 animate-fade-in">
                    <div className="bg-[#242840] rounded-lg p-4 font-mono text-sm text-gray-300 whitespace-pre-line">
                      {selectedTopic.correction.sample}
                    </div>
                    {selectedTopic.correction.vocab && selectedTopic.correction.vocab.length > 0 && (
                      <div className="mt-4">
                        <div className="text-xs font-bold text-yellow-500 mb-2">📚 Vocabulaire utile :</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedTopic.correction.vocab.map(v => (
                            <span key={v} className="bg-[#242840] border border-[#2a2e3a] rounded-lg px-3 py-1 text-xs text-gray-300">
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {openCorrectionId === selectedTopicId && !selectedTopic.correction && (
                  <div className="p-4 pt-0 border-t border-yellow-500/20 animate-fade-in">
                    <div className="bg-[#242840] rounded-lg p-4 text-sm text-gray-400">
                      ✍️ Écrivez votre réponse puis comparez-la avec la correction de votre professeur.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SprechenSchreiben;