'use client';

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const HostpilotPrivacy: React.FC = () => {
  const router = useRouter();

  useSEO({
    title: "Privacy Policy - Hostpilot",
    description:
      "Informativa sulla privacy dell'app Hostpilot per la gestione di affitti brevi.",
    canonicalUrl: "https://www.eliazavatta.it/hostpilot/privacy",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => router.push(-1)}
          className="mb-8 hover:bg-blue-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna indietro
        </Button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Informativa sulla Privacy - HostPilot
          </h1>

          <p className="text-sm text-gray-500 mb-8 italic">
            Ultimo aggiornamento: 3 novembre 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Introduzione
            </h2>
            <p className="text-gray-700 mb-6">
              HostPilot è un'applicazione per la gestione di affitti brevi. La
              presente informativa sulla privacy descrive come raccogliamo,
              utilizziamo e proteggiamo le informazioni personali degli utenti.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Dati Raccolti
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.1 Dati di Autenticazione
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Account Google</strong>: Email, nome, foto profilo
                (tramite Google Sign-In)
              </li>
              <li>
                <strong>Account Apple</strong>: Email, nome, ID Apple (tramite
                Apple Sign-In)
              </li>
              <li>
                <strong>Credenziali di accesso</strong>: Token di autenticazione
                e identificativi di sessione
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.2 Dati degli Alloggi
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Informazioni dell'alloggio</strong>: Nome, indirizzo,
                note, orari di check-in/check-out
              </li>
              <li>
                <strong>Configurazioni</strong>: Impostazioni personalizzate,
                colori, icone
              </li>
              <li>
                <strong>Connessioni calendario</strong>: URL iCal per
                sincronizzazione con piattaforme esterne (Airbnb, Booking.com)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.3 Dati delle Prenotazioni
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Informazioni ospiti</strong>: Nome completo, dati di
                contatto (email, telefono)
              </li>
              <li>
                <strong>Dettagli soggiorno</strong>: Date check-in/check-out,
                numero ospiti, canale di prenotazione
              </li>
              <li>
                <strong>Dati finanziari</strong>: Costi, commissioni, tasse di
                soggiorno, cedolare secca
              </li>
              <li>
                <strong>Identificativi esterni</strong>: ID prenotazioni da
                piattaforme terze
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.4 Dati Documenti Ospiti
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Dati anagrafici</strong>: Nome, cognome, data e luogo di
                nascita, cittadinanza
              </li>
              <li>
                <strong>Documenti identità</strong>: Tipo, numero, luogo e data
                di rilascio, scadenza
              </li>
              <li>
                <strong>Informazioni soggiorno</strong>: Date arrivo/partenza,
                giorni permanenza
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.5 Dati Finanziari
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Spese</strong>: Descrizione, importi, categorie, date
              </li>
              <li>
                <strong>Ricavi</strong>: Importi, fonti, periodi di riferimento
              </li>
              <li>
                <strong>Statistiche</strong>: Metriche di performance e analisi
                andamenti
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.6 Dati Tecnici
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Logs applicazione</strong>: Registri attività tramite
                LoggerService
              </li>
              <li>
                <strong>Preferenze utente</strong>: Impostazioni
                sincronizzazione, notifiche
              </li>
              <li>
                <strong>Dati dispositivo</strong>: Identificativi per notifiche
                push (Firebase)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.7 Dati Pagamenti e Abbonamenti
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Informazioni di pagamento</strong>: Dati carta di
                credito, IBAN, metodi di pagamento (tramite Stripe)
              </li>
              <li>
                <strong>Dati abbonamento</strong>: Piano tariffario, rinnovi
                automatici, cancellazioni (tramite RevenueCat)
              </li>
              <li>
                <strong>Storico transazioni</strong>: Importi, date, stati
                pagamenti per fatturazione e supporto
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Base Giuridica del Trattamento
            </h2>
            <p className="text-gray-700 mb-6">
              Il trattamento dei dati è basato su:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Art. 6(1)(a) GDPR</strong>: Consenso esplicito per dati
                non essenziali
              </li>
              <li>
                <strong>Art. 6(1)(b) GDPR</strong>: Esecuzione contratto per
                servizi richiesti
              </li>
              <li>
                <strong>Art. 6(1)(c) GDPR</strong>: Obbligo legale per
                adempimenti fiscali e registrazione ospiti
              </li>
              <li>
                <strong>Art. 6(1)(f) GDPR</strong>: Interesse legittimo per
                miglioramento servizi
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Finalità del Trattamento
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              4.1 Finalità Principali
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Gestione prenotazioni e alloggi</li>
              <li>Registrazione ospiti per adempimenti normativi</li>
              <li>Calcolo automatico tasse e commissioni</li>
              <li>Sincronizzazione con piattaforme esterne</li>
              <li>Generazione statistiche e reportistica</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              4.2 Finalità Secondarie
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Miglioramento esperienza utente</li>
              <li>Supporto tecnico e risoluzione problemi</li>
              <li>Invio notifiche relative ai servizi</li>
              <li>Analisi utilizzo applicazione</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Archiviazione e Conservazione
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              5.1 Archiviazione Locale
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Hive Database</strong>: Dati principali archiviati
                localmente sul dispositivo
              </li>
              <li>
                <strong>Crittografia</strong>: Dati sensibili crittografati a
                riposo
              </li>
              <li>
                <strong>Backup automatico</strong>: Sincronizzazione con
                database remoto Turso
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              5.2 Archiviazione Remota
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Database Supabase</strong>: Sincronizzazione dati tra
                dispositivi, con crittografia end-to-end
              </li>
              <li>
                <strong>Firebase</strong>: Gestione autenticazione e notifiche
                push
              </li>
              <li>
                <strong>Google Drive</strong>: Backup opzionale dati (se
                autorizzato)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              5.3 Tempi di Conservazione
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Dati ospiti</strong>: 10 anni per adempimenti fiscali
              </li>
              <li>
                <strong>Prenotazioni</strong>: 10 anni per obblighi normativi
              </li>
              <li>
                <strong>Logs tecnici</strong>: 2 anni per supporto e debugging
              </li>
              <li>
                <strong>Preferenze utente</strong>: Fino a cancellazione account
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Condivisione Dati
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              6.1 Non Condivisione
            </h3>
            <p className="text-gray-700 mb-6">
              Non vendiamo, affittiamo o cediamo dati personali a terzi per
              finalità commerciali.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              6.2 Condivisione Necessaria
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Autorità competenti</strong>: Su richiesta legale per
                controlli fiscali/normativi
              </li>
              <li>
                <strong>Provider servizi</strong>: Google (autenticazione),
                Apple (autenticazione), Firebase (notifiche), Supabase
                (database), Stripe (pagamenti), RevenueCat (abbonamenti)
              </li>
              <li>
                <strong>Piattaforme integrate</strong>: Solo dati necessari per
                sincronizzazione calendari
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              6.3 Trasferimenti Internazionali
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Dati trattati prevalentemente in UE</li>
              <li>Servizi Google/Firebase: adequacy decision UE-USA</li>
              <li>Garanzie appropriate per tutti i trasferimenti extra-UE</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Diritti dell'Interessato
            </h2>
            <p className="text-gray-700 mb-6">
              Secondo il GDPR, hai diritto a:
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              7.1 Accesso (Art. 15)
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Richiedere copia dei tuoi dati personali</li>
              <li>Informazioni su finalità e modalità trattamento</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              7.2 Rettifica (Art. 16)
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Correggere dati inesatti o incompleti</li>
              <li>Aggiornare informazioni obsolete</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              7.3 Cancellazione (Art. 17 - "Diritto all'oblio")
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Eliminazione dati non più necessari</li>
              <li>Revoca consenso (ove applicabile)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              7.4 Limitazione (Art. 18)
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Sospensione trattamento in casi specifici</li>
              <li>Marcatura dati durante verifiche</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              7.5 Portabilità (Art. 20)
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Esportazione dati in formato strutturato</li>
              <li>
                Trasferimento a altro titolare (ove tecnicamente possibile)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              7.6 Opposizione (Art. 21)
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Opposizione per interesse legittimo</li>
              <li>Opt-out marketing diretto</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              7.7 Decisioni Automatizzate (Art. 22)
            </h3>
            <p className="text-gray-700 mb-6">
              Non utilizziamo profilazione o decisioni automatizzate
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Sicurezza Dati
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              8.1 Misure Tecniche
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Crittografia</strong>: AES-256 per dati sensibili
              </li>
              <li>
                <strong>Autenticazione forte</strong>: OAuth 2.0 con Google e
                Apple
              </li>
              <li>
                <strong>Backup sicuri</strong>: Copie cifrate su cloud
                (Supabase, Google Drive)
              </li>
              <li>
                <strong>Logs sicurezza</strong>: Monitoraggio accessi
              </li>
              <li>
                <strong>Certificazioni</strong>: Supabase e Stripe conformi a
                SOC 2 e PCI DSS per sicurezza dati
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              8.2 Misure Organizzative
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Accesso limitato</strong>: Solo personale autorizzato
              </li>
              <li>
                <strong>Formazione</strong>: Staff formato su privacy e
                sicurezza
              </li>
              <li>
                <strong>Audit regolari</strong>: Verifiche periodiche sistemi
              </li>
              <li>
                <strong>Incident response</strong>: Procedure breach
                notification
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Minori
            </h2>
            <p className="text-gray-700 mb-6">
              L'app non è destinata a minori di 16 anni. Non raccogliamo
              consapevolmente dati di minori. Se veniamo a conoscenza di dati di
              minori, procederemo alla cancellazione immediata.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Modifiche Privacy Policy
            </h2>
            <p className="text-gray-700 mb-6">
              Ci riserviamo il diritto di modificare questa informativa. Le
              modifiche sostanziali saranno comunicate tramite:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Notifica in-app</li>
              <li>Email (se disponibile)</li>
              <li>Pubblicazione versione aggiornata</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Cookie e Tecnologie Simili
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              11.1 Utilizzo
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>
                <strong>Sessioni</strong>: Mantenimento autenticazione
              </li>
              <li>
                <strong>Preferenze</strong>: Salvataggio impostazioni utente
              </li>
              <li>
                <strong>Analytics</strong>: Statistiche utilizzo anonime (se
                consentito)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              11.2 Controllo
            </h3>
            <p className="text-gray-700 mb-6">
              Puoi gestire preferenze tramite impostazioni app o disabilitando
              funzioni specifiche.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              12. Contatti e Richieste
            </h2>
            <p className="text-gray-700 mb-6">
              Per esercitare i tuoi diritti o per domande sulla privacy:
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Titolare del Trattamento:</strong>
              <br />
              Elia Zavatta
              <br />
              Email: info@eliazavatta.it
              <br />
              Supporto Privacy: info@eliazavatta.it (per richieste specifiche)
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Autorità di Controllo:</strong>
              <br />
              Garante per la Protezione dei Dati Personali
              <br />
              Website: www.gpdp.it
              <br />
              Email: garante@gpdp.it
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              13. Clausole Finali
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              13.1 Legislazione Applicabile
            </h3>
            <p className="text-gray-700 mb-6">
              Questa informativa è regolamentata dalla normativa italiana e dal
              GDPR.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              13.2 Foro Competente
            </h3>
            <p className="text-gray-700 mb-6">
              Per eventuali controversie, è competente il Tribunale del luogo di
              residenza dell'interessato.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              13.3 Validità
            </h3>
            <p className="text-gray-700 mb-6">
              In caso di nullità di singole clausole, rimangono valide le
              restanti disposizioni.
            </p>

            <hr className="my-8" />

            <p className="text-sm text-gray-500 italic">
              <strong>Versione:</strong> 1.1
              <br />
              <strong>Data ultima revisione:</strong> 3 novembre 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HostpilotPrivacy;
