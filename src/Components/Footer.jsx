
function Footer() {
    
    return (
        <footer className='container-fluid bg-primary text-light rounded-top p-3'>
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <h3>Markdown Previewer</h3>
                    <p className='m-0 text-light text-sm'><strong>Developed by</strong> Sandun Madushaka. <strong>Challenged by</strong> freecodecamp.org</p>
                    <p className='m-0 text-light text-sm'><strong>Technology used:</strong> Reactjs, Bootstrap</p>
                    <p className='m-0 text-light text-sm'><strong>Third party libraries:</strong> Markedjs, DOMPurify</p>
                </div>
                <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
                    <h3>Contact</h3>
                    <a className='text-light' href='gsmpereraw@gmail.com'>gsmpereraw@gmail.com</a>
                </div>
                <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
                    <h3>Links</h3>
                    <nav>
                        <a className='text-light me-2' href="https://github.com/gsmperera">GitHub</a>
                        <a className='text-light' href="https://codepen.io/gsmperera">CodePen</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;