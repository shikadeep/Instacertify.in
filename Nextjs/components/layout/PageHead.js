import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Instacertify"}
                </title>
                {/* <link rel="shortcut icon" href="/favicon.svg" /> */}
                {/* <link rel="shortcut icon" href="/insta-logo-2.png"  /> */}
            </Head>
        </>
    )
}

export default PageHead