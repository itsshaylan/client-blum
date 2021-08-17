import Link from "next/link"

interface RedirectProps {
    link?: string
}

export const Redirect: React.FunctionComponent<RedirectProps> = props => {
    const myLink: string = props.link || 'https://go.booker.com/location/BlumNailBarV1'
    return <>
        <div className="container">
            <div>
                <h2>Notice</h2>
                <p>
                    Any appointments made does not guarantee the exact time, <br />
                    please note this is only a call ahead reservation.
                </p>
            </div>
            <div>
                <br />
                <a href={myLink} className="button">continue</a>
            </div>
        </div>
    </>
}