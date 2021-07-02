
function Editor(props) {

    return (
        <div id='editor-container' className="container-fluid d-flex flex-column justify-content-between p-0 p-md-1 ps-md-0 mb-1 mb-md-0">

            <header className="container-fluid d-flex bg-primary text-light">
                <i class="fas fa-pencil-alt navbar-brand"></i>
                <h3 className='h4 d-inline-block'>Editor</h3>
                <button id='clearText' onClick={props.handleClear} className='btn btn-primary btn-sm ms-auto'>Clear Text</button>
            </header>

            <div className="container-fluid flex-fill d-flex align-items-stretch p-0">
                <textarea id='textArea' onChange={props.handleInput} className='container-fluid flex-fill border border-primary rounded-bottom' value={props.text}></textarea>
            </div>

        </div>
    );
}

export default Editor;
