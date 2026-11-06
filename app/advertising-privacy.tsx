type PolicySection = { title: string; body: string };

const english: PolicySection[] = [
  {
    title: 'Which version this policy covers',
    body: 'The advertising provisions below apply to the advertising-enabled iPhone edition, PartMirror iOS 1.1.3 and later, when available. iOS 1.1.2 and earlier do not include these third-party advertising SDKs; their earlier policy remains available below. Android has a separate privacy policy. This update does not mean that an advertising-enabled version has already been published.',
  },
  {
    title: 'Camera, face measurements and saved looks',
    body: 'Camera images, TrueDepth measurements, face pose and geometry, hair-guide points and saved looks are processed on your device. PartMirror does not send these to its advertising partners or use them to target advertisements. Live TrueDepth measurements and face geometry are kept in memory during the camera session, not saved as a reusable mesh or depth map. Saved photos, videos, look names and part recipes stay in the app unless you choose to export or share them. Device backups may include local app files according to your Apple/iCloud settings. Photo Library access is used only for the media actions you choose. Deleting a saved look removes its app copy; uninstalling removes locally stored app data. Copies you export remain where you saved or shared them.',
  },
  {
    title: 'Optional partner advertising',
    body: 'The advertising-enabled edition uses Unity LevelPlay mediation, Unity advertising services (including ironSource/iSX where supplied through mediation) and Liftoff Monetize (Vungle). Where the app requires prior consent for contextual ads, it asks before initializing partner advertising. In iOS 1.1.4, users who decline that choice can review it or use Ad-Free. In other supported regions, contextual ads are available without this initial prompt. A bundled Nonlate promotion can appear when a partner banner is unavailable. Verified AdFree access removes partner advertisements and the local promotion. The app also suppresses ad requests while subscription access is unresolved.',
  },
  {
    title: 'Information handled by advertising services',
    body: 'When you allow partner advertisements, the services may process device and advertising identifiers, IP address and IP-derived approximate location, app and ad interactions, ad impressions and clicks, permission status, device language/model/operating system/connection information, and performance or diagnostic information. Providers may associate advertising and usage information with device identifiers. Unity also declares service-generated user identifiers, purchase-related information and other usage/device data in its disclosures. PartMirror does not send its StoreKit purchase history, your camera content, payment-card details, bank details, name or email address to the ad SDKs. Providers use the information they collect to deliver and measure ads, operate their services, prevent fraud and analyze or improve performance, as explained in their own policies.',
  },
  {
    title: 'Advertising choice and tracking permission',
    body: 'The choice to use contextual partner ads is separate from optional ad personalization. Versions that offer personalization ask whether you allow Unity, ironSource and Liftoff to use and share your advertising identifier and ad interactions to personalize and measure ads across companies’ apps and websites. Personalized ad requests require both that choice and Apple’s App Tracking Transparency permission. If either is absent, the app sends restrictive consent and sale/sharing signals to LevelPlay and continues with contextual ads where permitted. Refusing personalization or tracking does not affect access to the camera. To withdraw personalization, open Settings → Privacy → Ad privacy in PartMirror or turn off tracking in iOS Settings. PartMirror does not supply alternative identity tokens, email hashes or camera-derived identifiers for advertising.',
  },
  {
    title: 'Withdrawing permission and retention',
    body: 'Withdrawing permission for partner ads stops new app-initiated partner ad requests and removes the partner banner. Withdrawing personalization changes subsequent eligible requests to contextual ads. A previously initialized SDK may still complete existing processing; withdrawal does not automatically erase information already held by a partner. Advertising providers determine retention, recipients and international transfers under their policies. For access, deletion or other applicable privacy requests, contact PartMirror or the relevant provider. Reinstalling or resetting app data may require you to choose again.',
  },
  {
    title: 'Purchases, support and external links',
    body: 'Apple processes subscriptions and payments. PartMirror uses StoreKit access information to determine AdFree eligibility and does not receive your payment-card or bank details. If you choose to email support or report an advertisement, your email provider and the recipient receive the information and attachments you send. Include only what is needed; do not send camera images or personal documents unless you want them included. Opening an ad, a provider privacy page, a Nonlate promotion or an export destination takes you to a service with its own privacy practices.',
  },
  {
    title: 'Website, audience and policy changes',
    body: 'PartMirror is a general-audience utility and is not designed specifically for children. This website does not run the app’s advertising SDKs; hosting services may process ordinary request and security logs. We may update this policy when the app or its providers change. The version and platform scope above determines which advertising provisions apply. Contact the developer, Manay Mite, at mite.appdev@gmail.com for questions about PartMirror’s processing. Provider privacy policies and request channels are linked below.',
  },
];

const portuguese: PolicySection[] = [
  {
    title: 'A que versão se aplica esta política',
    body: 'As disposições sobre publicidade abaixo aplicam-se à edição de iPhone com anúncios, PartMirror iOS 1.1.3 e posteriores, quando disponível. O iOS 1.1.2 e anteriores não incluem estes SDKs de publicidade de terceiros; a política anterior continua disponível abaixo. O Android tem uma política separada. Esta atualização não significa que a versão com anúncios já tenha sido publicada.',
  },
  {
    title: 'Câmara, medições faciais e looks guardados',
    body: 'As imagens da câmara, medições TrueDepth, posição e geometria facial, pontos das guias e looks guardados são processados no dispositivo. O PartMirror não os envia aos parceiros de publicidade nem os usa para direcionar anúncios. As medições TrueDepth e a geometria facial em tempo real ficam na memória durante a sessão da câmara; não são guardadas como uma malha ou mapa de profundidade reutilizável. Fotografias, vídeos, nomes dos looks e configurações das riscas ficam na app, salvo se escolheres exportá-los ou partilhá-los. As cópias de segurança do dispositivo podem incluir ficheiros locais da app segundo as tuas definições Apple/iCloud. O acesso à Fototeca serve apenas para as ações de multimédia que escolheres. Apagar um look remove a cópia da app; desinstalar remove os dados locais da app. As cópias exportadas permanecem onde as guardaste ou partilhaste.',
  },
  {
    title: 'Publicidade opcional de parceiros',
    body: 'A edição com anúncios usa a mediação Unity LevelPlay, serviços de publicidade Unity (incluindo ironSource/iSX quando fornecidos pela mediação) e Liftoff Monetize (Vungle). Onde a app exige consentimento prévio para anúncios contextuais, pergunta antes de iniciar a publicidade dos parceiros. No iOS 1.1.4, quem recusar pode rever a escolha ou usar Ad-Free. Nas outras regiões suportadas, os anúncios contextuais estão disponíveis sem esse pedido inicial. Uma promoção Nonlate incluída na app pode aparecer quando o banner de um parceiro estiver indisponível. O acesso AdFree verificado remove anúncios de parceiros e a promoção local. A app também suspende os pedidos de anúncios enquanto o acesso à subscrição não estiver resolvido.',
  },
  {
    title: 'Informação tratada pelos serviços de publicidade',
    body: 'Se permitires anúncios de parceiros, esses serviços podem tratar identificadores do dispositivo e de publicidade, endereço IP e localização aproximada inferida do IP, interações com a app e anúncios, visualizações e cliques, estado das permissões, idioma/modelo/sistema operativo/ligação do dispositivo e informação de desempenho ou diagnóstico. Os fornecedores podem associar informação de publicidade e utilização a identificadores do dispositivo. A Unity também declara identificadores de utilizador gerados pelo serviço, informação relacionada com compras e outros dados de utilização/dispositivo. O PartMirror não envia aos SDKs o histórico de compras StoreKit, imagens da câmara, dados de cartões ou bancos, nome ou email. Os fornecedores usam os dados que recolhem para apresentar e medir anúncios, operar os serviços, prevenir fraude e analisar ou melhorar o desempenho, conforme as suas políticas.',
  },
  {
    title: 'Escolha de publicidade e permissão de rastreamento',
    body: 'A escolha de anúncios contextuais de parceiros é separada da personalização opcional. Nas versões que oferecem personalização, a app pergunta se permites que a Unity, a ironSource e a Liftoff usem e partilhem o identificador de publicidade e as tuas interações com anúncios para personalizar e medir anúncios entre apps e sites de várias empresas. Os pedidos personalizados exigem essa escolha e a autorização App Tracking Transparency da Apple. Se faltar uma delas, a app envia ao LevelPlay sinais restritivos de consentimento e de venda ou partilha e continua a pedir anúncios contextuais onde for permitido. Recusar a personalização ou o rastreamento não altera o acesso à câmara. Para desativar a personalização, abre Definições → Privacidade → Privacidade dos anúncios no PartMirror ou desativa o rastreamento nas definições do iOS. O PartMirror não fornece tokens alternativos de identidade, hashes de email ou identificadores derivados da câmara para publicidade.',
  },
  {
    title: 'Retirar a permissão e conservação dos dados',
    body: 'Retirar a permissão para anúncios de parceiros interrompe novos pedidos de anúncios de parceiros iniciados pela app e remove o banner do parceiro. Retirar a personalização muda os próximos pedidos elegíveis para anúncios contextuais. Um SDK já inicializado pode ainda concluir processamento existente; retirar a permissão não apaga automaticamente dados já detidos pelo parceiro. Os fornecedores determinam conservação, destinatários e transferências internacionais segundo as suas políticas. Para pedidos de acesso, eliminação ou outros direitos aplicáveis, contacta o PartMirror ou o fornecedor relevante. Reinstalar ou repor os dados da app pode exigir uma nova escolha.',
  },
  {
    title: 'Compras, suporte e ligações externas',
    body: 'A Apple processa subscrições e pagamentos. O PartMirror usa a informação de acesso StoreKit para determinar a elegibilidade AdFree e não recebe dados de cartões ou contas bancárias. Se escolheres enviar um email ao suporte ou denunciar um anúncio, o serviço de email e o destinatário recebem a informação e os anexos que enviares. Inclui apenas o necessário; não envies imagens da câmara ou documentos pessoais salvo se quiseres incluí-los. Abrir um anúncio, uma política de fornecedor, uma promoção Nonlate ou um destino de exportação leva-te a um serviço com práticas de privacidade próprias.',
  },
  {
    title: 'Site, público e alterações à política',
    body: 'O PartMirror é uma utilidade para o público geral e não foi concebido especificamente para crianças. Este site não executa os SDKs de publicidade da app; o alojamento pode tratar registos normais de pedidos e segurança. Podemos atualizar a política quando a app ou os fornecedores mudarem. O âmbito de versão e plataforma acima determina que disposições de publicidade se aplicam. Para questões sobre o tratamento de dados pelo PartMirror, contacta o programador Manay Mite em mite.appdev@gmail.com. As políticas e os canais de pedidos dos fornecedores estão ligados abaixo.',
  },
];

export function privacyLanguage(locale: string) {
  return locale.startsWith('pt') ? 'pt' : 'en';
}

export function AdvertisingPrivacy({ locale }: { locale: string }) {
  const pt = privacyLanguage(locale) === 'pt';
  return (
    <div lang={pt ? 'pt' : 'en'} dir="ltr">
      {!pt && locale !== 'en-US' && (
        <p className="translation-note">The advertising update is available in English and Portuguese. The English text below applies to iOS 1.1.3 and later; the earlier localized policy is preserved below.</p>
      )}
      <div className="legal-sections">
        {(pt ? portuguese : english).map(({ title, body }, index) => (
          <section key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h2>{title}</h2><p>{body}</p></div>
          </section>
        ))}
        <section>
          <span>09</span>
          <div>
            <h2>{pt ? 'Políticas dos parceiros e contacto' : 'Partner policies and contact'}</h2>
            <p><a href="https://unity.com/legal/privacy-policy">Unity / LevelPlay / ironSource</a></p>
            <p><a href="https://liftoff.io/privacy-policy/">Liftoff Monetize / Vungle</a></p>
            <p><a href="mailto:mite.appdev@gmail.com">mite.appdev@gmail.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
