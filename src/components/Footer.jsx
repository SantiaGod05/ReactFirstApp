const Footer = () => {
return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
            <p>Proyecto de React JS de <label htmlFor="my-modal" className="footerModal">Santiago Lombardi</label></p>
        </div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg">Santiago Lombardi</h3>
                <p className="py-4">Hola soy Santiago, un estudiante de programación de Argentina, podes contactarme y conocer mas de mi en estos links.</p>
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/santiago-lombardi-9a5a86231/">
                        <i className="fa-brands fa-linkedin mx-2" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/santiagolombardi_">
                        <i className="fa-brands fa-instagram mx-2" />
                    </a>
                    <a target="_blank" href="https://github.com/SantiagoLombardi">
                        <i className="fa-brands fa-github mx-2" />
                    </a>
                    <a target="_blank" href="https://t.me/SantiagoLombardi">
                        <i className="fa-brands fa-telegram mx-2" />
                    </a>
                    <a target="_blank" href="mailto:santiagonicolaslombardi2005@gmail.com">
                        <i className="fa-regular fa-envelope mx-2" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
)
}
export default Footer