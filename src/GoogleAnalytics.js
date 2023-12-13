import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ReactGa from 'react-ga'
const GoogleAnalytics = (props) => {
    useEffect(() => {
        ReactGa.initialize('UA-188884833-1')
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [])


    return (
        <>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.des} ></meta>

                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-188884833-1"></script> */}
                {/* <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'UA-188884833-1');
                </script> */}
            </Helmet>

        </>
    )
}

export default GoogleAnalytics
