import { Helmet } from 'react-helmet-async'
import { SEO_DEFAULTS } from './seoDefaults.js'

/**
 * Renders per-page SEO head tags via react-helmet-async.
 *
 * @param {Object} props
 * @param {string} [props.title]       — page title (appended with site name)
 * @param {string} [props.description]
 * @param {string} [props.canonical]   — full URL
 * @param {string} [props.ogImage]
 * @param {string} [props.jsonLd]      — JSON-LD structured data object
 */
export function SeoHead({ title, description, canonical, ogImage, jsonLd }) {
    const fullTitle = title
        ? `${title} — ${SEO_DEFAULTS.siteName}`
        : SEO_DEFAULTS.defaultTitle
    const desc = description || SEO_DEFAULTS.defaultDescription
    const url = canonical || SEO_DEFAULTS.siteUrl
    const image = ogImage || SEO_DEFAULTS.defaultOgImage

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={desc} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SEO_DEFAULTS.siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={SEO_DEFAULTS.twitterHandle} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD structured data */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    )
}
