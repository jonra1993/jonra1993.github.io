import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { siteMetadata } from '@/constants'

type SiteLogoProps = {
  kind: 'logo' | 'darklogo' | 'tlogolight' | 'tlogodark' | 'tlogogrey'
  logoType?: 'image' | 'link' | 'button'
  size?: number
  className?: string
  parentClassName?: string
  buttonClassName?: string
  href?: string | undefined
  target?: '_blank' | '_self' | '_parent' | '_top'
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
}

const SiteLogo = ({
  kind,
  href = '/',
  size = 12.5,
  logoType = 'link',
  className,
  parentClassName,
  buttonClassName,
  target = '_self',
  variant,
}: SiteLogoProps) => {
  const pxWidth = size ? size * 4 : 0
  const pxHeight = size ? size * 4 : 0

  const logoMap = {
    logo: '/static/images/logo.svg',
    darklogo: '/static/images/logo-d.svg',
    tlogolight: '/static/images/logo-tw.svg',
    tlogodark: '/static/images/logo-tb.svg',
    tlogogrey: '/static/images/logo-tg.svg',
  }

  const imagePath = logoMap[kind] || '/logo.svg'

  if (logoType === 'button') {
    return (
      <Button variant={variant} size="icon" className={buttonClassName}>
        <a
          href={href}
          className={parentClassName}
          aria-label={siteMetadata.headerTitle}
          target={target}
        >
          <div className="flex items-center justify-between">
            <img
              src={imagePath}
              alt={'Jonathan Vargas'}
              width={`${pxWidth}`}
              height={`${pxHeight}`}
              title={'Jonathan Vargas'}
              className={cn('drop-shadow-lg filter', className)}
            />
          </div>
        </a>
      </Button>
    )
  }

  if (logoType === 'link' && href) {
    return (
      <a
        href={href}
        className={parentClassName}
        aria-label={siteMetadata.headerTitle}
        target={target}
      >
        <div className="flex items-center justify-between">
          <img
            src={imagePath}
            alt={'Jonathan Vargas'}
            width={`${pxWidth}`}
            height={`${pxHeight}`}
            title={'Jonathan Vargas'}
            className={cn('drop-shadow-lg filter', className)}
          />
        </div>
      </a>
    )
  }
  if (logoType === 'image') {
    return (
      <img
        src={imagePath}
        alt={'Jonathan Vargas'}
        width={`${pxWidth}`}
        height={`${pxHeight}`}
        title={'Jonathan Vargas'}
        className={cn('drop-shadow-lg filter', className)}
      />
    )
  }
}

export default SiteLogo