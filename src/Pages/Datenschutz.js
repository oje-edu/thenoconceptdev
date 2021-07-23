import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import { NavLink } from 'react-router-dom'

function Datenschutz() {
  return (
    <MainLayout>
      <DatenschutzStyled>
        <Title title={ 'Datenschutz' } span={ '§ Rechtliches' } />
        <InnerLayout className={ 'datenschutz-section' }>
          <h1>Datenschutzerklärung</h1>
          <h2>Einleitung</h2>
          <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang im Rahmen der Bereitstellung unserer Applikation verarbeiten.</p>
          <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
          <p>Stand: 23. Juli 2021</p>
          <h2>Inhaltsübersicht</h2>
          <ul className="index">
            <li><a className="index-link" href="#m1870">Einleitung</a></li>
            <li><a className="index-link" href="#m3">Verantwortlicher</a></li>
            <li><a className="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li>
            <li><a className="index-link" href="#m13">Maßgebliche Rechtsgrundlagen</a></li>
            <li><a className="index-link" href="#m27">Sicherheitsmaßnahmen</a></li>
            <li><a className="index-link" href="#m25">Übermittlung von personenbezogenen Daten</a></li>
            <li><a className="index-link" href="#m24">Datenverarbeitung in Drittländern</a></li>
            <li><a className="index-link" href="#m12">Löschung von Daten</a></li>
            <li><a className="index-link" href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a></li>
            <li><a className="index-link" href="#m104">Blogs und Publikationsmedien</a></li>
            <li><a className="index-link" href="#m15">Änderung und Aktualisierung der Datenschutzerklärung</a></li>
          </ul>
          <h2 id="m3">Verantwortlicher</h2>
          <p>
            noconcept.dev<br />
            Thorsten OJE<br />
            Im Luss 40a<br />
            74847 Obrigheim, Baden, DE
          </p>
          <p>
            E-Mail-Adresse: <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#110;&#111;&#099;&#111;&#110;&#099;&#101;&#112;&#116;&#046;&#100;&#101;&#118;">info@noconcept.dev</a>
          </p>
          <p>Impressum: <NavLink to={'/impressum'}>https://the.noconcept.dev/impressum</NavLink></p>
          <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
          <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
          <h3>Arten der verarbeiteten Daten</h3>
          <ul>
            <li>Bestandsdaten (z.B. Namen, Adressen).</li>
            <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen).</li>
            <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
            <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
            <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
          </ul>
          <h3>Kategorien betroffener Personen</h3>
          <ul>
            <li>Kommunikationspartner.</li>
            <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
          </ul>
          <h3>Zwecke der Verarbeitung</h3>
          <ul>
            <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
            <li>Content Delivery Network (CDN).</li>
            <li>Direktmarketing (z.B. per E-Mail oder postalisch).</li>
            <li>Feedback (z.B. Sammeln von Feedback via Online-Formular).</li>
            <li>Kontaktanfragen und Kommunikation.</li>
            <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
          </ul>
          <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
          <p>Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
            Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.
            Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
          </p>
          <ul>
            <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
            <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
            <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.</li>
          </ul>
          <p><strong>Nationale Datenschutzregelungen in Deutschland</strong>: Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG).
            Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling.
            Des Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten.
            Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
          </p>
          <h2 id="m27">Sicherheitsmaßnahmen</h2>
          <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
          <p>
            Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten.
            Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
          </p>
          <p>
            <strong>SSL-Verschlüsselung (https)</strong>: Um Ihre via unserem Online-Angebot übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.
          </p>
          <h2 id="m25">Übermittlung von personenbezogenen Daten</h2>
          <p>
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
          </p>
          <p>
            <strong>Datenübermittlung innerhalb der Organisation</strong>: Wir können personenbezogene Daten an andere Stellen innerhalb unserer Organisation übermitteln oder ihnen den Zugriff auf diese Daten gewähren. Sofern diese Weitergabe zu administrativen Zwecken erfolgt, beruht die Weitergabe der Daten auf unseren berechtigten unternehmerischen und betriebswirtschaftlichen Interessen oder erfolgt, sofern sie Erfüllung unserer vertragsbezogenen Verpflichtungen erforderlich ist oder wenn eine Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis vorliegt.
          </p>
          <h2 id="m24">Datenverarbeitung in Drittländern</h2>
          <p>
            Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben.
          </p>
          <p>
            Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir die Daten nur in Drittländern mit einem anerkannten Datenschutzniveau, vertraglichen Verpflichtung durch sogenannte Standardschutzklauseln der EU-Kommission, beim Vorliegen von Zertifizierungen oder verbindlicher internen Datenschutzvorschriften verarbeiten  (Art. 44 bis 49 DSGVO, Informationsseite der EU-Kommission: <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a>).
          </p>
          <h2 id="m12">Löschung von Daten</h2>
          <p>
            Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).
          </p>
          <p>
            Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.
          </p>
          <p>
            Unsere Datenschutzhinweise können ferner weitere Angaben zu der Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen Verarbeitungen vorrangig gelten.
          </p>
          <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
          <p>
            Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.
          </p>
          <p>
            Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von Onlineangeboten an Browser ausliefern zu können, und alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten Eingaben.
          </p>
          <p>
            <strong>Erhebung von Zugriffsdaten und Logfiles</strong>: Wir selbst (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören.
          </p>
          <p>
            Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen.
          </p>
          <p>
            <strong>Content-Delivery-Network</strong>: Wir setzen ein "Content-Delivery-Network" (CDN) ein. Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Programm-Skripte, mit Hilfe regional verteilter und über das Internet verbundener Server schneller und sicherer ausgeliefert werden können.
          </p>
          <ul className="m-elements">
            <li><strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Eingaben in Onlineformularen), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
            <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
            <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit, Content Delivery Network (CDN).</li>
            <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
          </ul>
          <p><strong>Eingesetzte Dienste und Diensteanbieter:</strong></p>
          <ul className="m-elements">
            <li>
              <strong>Hetzner:</strong> Leistungen auf dem Gebiet der Bereitstellung von informationstechnischer Infrastruktur und verbundenen Dienstleistungen (z.B. Speicherplatz und/oder Rechenkapazitäten); Dienstanbieter: Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland; Website: <a href="https://www.hetzner.com" target="_blank" rel="noopener noreferrer">https://www.hetzner.com</a>; Datenschutzerklärung: <a href="https://www.hetzner.com/de/rechtliches/datenschutz" target="_blank" rel="noopener noreferrer">https://www.hetzner.com/de/rechtliches/datenschutz</a>.
            </li>
          </ul>
          <h2 id="m104">Blogs und Publikationsmedien</h2>
          <p>Wir nutzen Blogs oder vergleichbare Mittel der Onlinekommunikation und Publikation (nachfolgend "Publikationsmedium"). Die Daten der Leser werden für die Zwecke des Publikationsmediums nur insoweit verarbeitet, als es für dessen Darstellung und die Kommunikation zwischen Autoren und Lesern oder aus Gründen der Sicherheit erforderlich ist. Im Übrigen verweisen wir auf die Informationen zur Verarbeitung der Besucher unseres Publikationsmediums im Rahmen dieser Datenschutzhinweise.</p>
          <p><strong>Profilbilder von Gravatar</strong>: Wir setzen innerhalb unseres Onlineangebotes und insbesondere im Blog den Dienst Gravatar ein.</p>
          <p>Gravatar ist ein Dienst, bei dem sich Nutzer anmelden und Profilbilder und ihre E-Mail-Adressen hinterlegen können. Wenn Nutzer mit der jeweiligen E-Mail-Adresse auf anderen Onlinepräsenzen (vor allem in Blogs) Beiträge oder Kommentare hinterlassen, können deren Profilbilder neben den Beiträgen oder Kommentaren dargestellt werden. Hierzu wird die von den Nutzern mitgeteilte E-Mail-Adresse an Gravatar zwecks Prüfung, ob zu ihr ein Profil gespeichert ist, verschlüsselt übermittelt. Dies ist der einzige Zweck der Übermittlung der E-Mail-Adresse. Sie wird nicht für andere Zwecke verwendet, sondern danach gelöscht.</p>
          <p>Die Nutzung von Gravatar erfolgt auf Grundlage unserer berechtigten Interessen, da wir mit Hilfe von Gravatar den Beitrags- und Kommentarverfassern die Möglichkeit bieten, ihre Beiträge mit einem Profilbild zu personalisieren.</p>
          <p>Durch die Anzeige der Bilder bringt Gravatar die IP-Adresse der Nutzer in Erfahrung, da dies für eine Kommunikation zwischen einem Browser und einem Onlineservice notwendig ist. </p>
          <p>Wenn Nutzer nicht möchten, dass ein mit ihrer E-Mail-Adresse bei Gravatar verknüpftes Benutzerbild in den Kommentaren erscheint, sollten sie zum Kommentieren eine E-Mail-Adresse nutzen, welche nicht bei Gravatar hinterlegt ist. Wir weisen ferner darauf hin, dass es auch möglich ist eine anonyme oder gar keine E-Mail-Adresse zu verwenden, falls die Nutzer nicht wünschen, dass die eigene E-Mail-Adresse an Gravatar übersendet wird. Nutzer können die Übertragung der Daten komplett verhindern, indem sie unser Kommentarsystem nicht nutzen.</p>
          <ul className="m-elements">
            <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Eingaben in Onlineformularen), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
            <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
            <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Kundenservice, Feedback (z.B. Sammeln von Feedback via Online-Formular), Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
            <li><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
          </ul>
          <p><strong>Eingesetzte Dienste und Diensteanbieter:</strong></p>
          <ul className="m-elements">
            <li><strong>Profilbilder von Gravatar:</strong> Profilbilder; Dienstanbieter: Automattic Inc., 60 29th Street #343, San Francisco, CA 94110, USA; Website: <a href="https://automattic.com" target="_blank" rel="noopener noreferrer">https://automattic.com</a>; Datenschutzerklärung: <a href="https://automattic.com/privacy" target="_blank" rel="noopener noreferrer">https://automattic.com/privacy</a>.
            </li>
          </ul>
          <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
          <p>Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.</p>
          <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.</p>
          <p className="seal"><a href="https://datenschutz-generator.de/?l=de" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a></p>

        </InnerLayout>
      </DatenschutzStyled>
    </MainLayout>
  )
}

const DatenschutzStyled = styled.section`
  .datenschutz-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    h1 {
      margin: 1.2rem;
    }
    h2 {
      margin: 1.1rem;
      color: white;
    }
    h3 {
      margin: 1.0rem;
      color: white;
    }

    p {
      width: 50vw;
      line-height: 1.5rem;
    }

    li {
      line-height: 1.5rem;
      width: 50vw;
      a {
        color: blue;
        &:hover {
          transition: all 0.5s ease-in-out;
          color: red;
        }
      }
    }
  }
`

export default Datenschutz
