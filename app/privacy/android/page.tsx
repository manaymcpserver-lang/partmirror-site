import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Android Privacy Policy',
  description: 'Privacy practices for PartMirror on Android, including ARCore, advertising and Google Play subscriptions.',
  alternates: { canonical: '/privacy/android/' },
};

const sections = [
  ['Camera and face tracking', 'PartMirror uses the front camera and ARCore Augmented Faces to estimate face pose, face geometry and guide points. These are used only to position and render the hair-parting guide, not to identify or authenticate you, build a personal profile, target advertising or train machine-learning models. Live camera images and face geometry are processed on your device, held in memory during the camera session and not uploaded by PartMirror. This version does not use Cloud Anchors or the Geospatial API.'],
  ['Photos, videos and saved looks', 'A photo or video is created only when you choose to capture one. Saved media, look names and part settings remain in private app storage on your Android device. PartMirror has no account system or server-side My Looks library. Android backup is disabled for this app. Saved media does not include a reusable face mesh.'],
  ['Sharing, export and deletion', 'You can delete saved looks in My Looks. Clearing app data or uninstalling PartMirror removes its private local library; exported copies remain wherever you saved them. Sharing or exporting is optional and initiated by you. Android and your selected destination then handle that media under their own policies. PartMirror does not scan your full photo library.'],
  ['Non-personalized advertising', 'The free version uses Google AdMob and Google\u2019s User Messaging Platform (UMP) for non-personalized banner advertising and applicable consent or privacy choices. PartMirror never sends camera images, face geometry, saved looks, look names or part settings to the ad provider. Non-personalized does not mean no data collection: Google\u2019s advertising services may collect and share your IP address (which can indicate approximate location), device or account identifiers, advertising identifiers, app interactions and performance or diagnostic information for advertising, analytics and fraud prevention. PartMirror disables publisher first-party identifiers and ad personalization. Advertising identifiers can be reset or deleted in Android settings.'],
  ['ARCore service data', 'Google Play Services for AR (ARCore) collects Google account identifiers when you are signed in, or device identifiers otherwise, API usage and app activity, and performance or diagnostic data such as loading time, latency, frame rate and battery information. Google uses this required service data for analytics, diagnostics and improving AR experiences. This service telemetry is distinct from the live camera images and face mesh processed locally by PartMirror.'],
  ['Google Play subscriptions', 'Google Play processes PartMirror Ad-Free purchases, renewals, cancellation and subscription management. PartMirror uses Google Play purchase records and purchase tokens to verify, acknowledge, restore and apply ad-free access. We do not operate a purchase server, receive payment-card details or create a PartMirror account. Verified subscribers do not receive banner ads; privacy/consent services and ARCore may still process their own service data.'],
  ['Security and retention', 'Google documents encryption in transit for AdMob data (TLS) and ARCore data on Google Play devices (HTTPS). PartMirror does not receive or retain the live tracking data or your private My Looks library on our servers. Google controls retention of data collected by its services under its policies; we cannot promise automatic deletion or directly delete that service data for you. Android privacy controls and Google account privacy tools can be used to manage applicable Google data.'],
  ['Audience', 'PartMirror for Android is intended for people aged 13 and older and is not directed to children under 13.'],
  ['Policy updates and contact', 'This policy applies to the Android app, including closed-test versions. We may update it as the app changes and will update the effective date. Questions about privacy can be sent to support@partmirror.com.'],
];

export default function AndroidPrivacyPage() {
  return (
    <main lang="en" dir="ltr">
      <header className="site-header">
        <Link className="brand" href="/">PartMirror</Link>
        <nav aria-label="Privacy navigation"><Link href="/support/">Support</Link><Link href="/privacy/">iOS Privacy</Link></nav>
      </header>
      <article className="document-page legal-page">
        <header className="document-hero">
          <p className="eyebrow">PartMirror · Android</p>
          <h1>Privacy Policy</h1>
          <p className="effective-date">Effective October 7, 2026</p>
          <p>This policy describes PartMirror on Android (com.partmirror.app), its camera guide, private saved looks, advertising and Google Play subscriptions.</p>
        </header>
        <div className="legal-sections">
          {sections.map(([title, body], index) => <section key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}
          <section><span>10</span><div><h2>Google privacy information</h2><p><a className="legal-link" href="https://policies.google.com/privacy">Google Privacy Policy</a></p><p><a className="legal-link" href="https://developers.google.com/admob/android/privacy/play-data-disclosure">AdMob data practices</a></p><p><a className="legal-link" href="https://developers.google.com/ar/develop/play-safety-label">ARCore data practices</a></p></div></section>
        </div>
      </article>
    </main>
  );
}
