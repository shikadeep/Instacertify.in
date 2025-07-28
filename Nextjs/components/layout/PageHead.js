import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "instacertify"}
                </title>
                {/* <link rel="shortcut icon" href="/favicon.svg" /> */}
                <link rel="icon" href="/Instacertify-fevicon.png" type="image/png" />
                 {/* <link rel="shortcut icon" href="/instacetify-fevicon.png" /> You can change this to your logo file */}
            </Head>
        </>
    )
}

export default PageHead