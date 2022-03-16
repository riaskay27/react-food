function Footer() {
    return (
        <footer className="page-footer #b2dfdb teal lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="#80cbc4 teal lighten-3 right"
                        href="https://github.com/riaskay27/reat-shop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
