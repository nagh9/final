import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/nagh9/final-project
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="https://gulshansongara.netlify.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Naghma B'n
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;