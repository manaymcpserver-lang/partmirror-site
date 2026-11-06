import Image from 'next/image';

export const appStoreUrl = 'https://apps.apple.com/app/partmirror-hair-part-guide/id6806834490';

export function AppStoreBadge({ locale = 'en-US' }: { locale?: string }) {
  const label = locale === 'pt-PT' ? 'Descarregar na App Store'
    : locale === 'pt-BR' ? 'Baixar na App Store' : 'Download on the App Store';

  const asset = locale === 'pt-PT' || locale === 'pt-BR'
    ? `/app-store-badge-${locale.toLowerCase()}.svg` : '/app-store-badge.svg';

  return (
    <a className="store-badge" href={appStoreUrl}>
      <Image src={asset} alt={label} width={120} height={40} />
    </a>
  );
}
