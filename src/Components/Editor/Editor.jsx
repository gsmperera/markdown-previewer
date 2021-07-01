
function Editor(props) {
    return (
        <div className='col-6'>
            <header className='container bg-primary rounded-top text-light'>
                <i class="fas fa-pencil-alt navbar-brand"></i>Editor
            </header>
            <textarea onChange={props.handleInput} className='container border border-primary rounded-bottom h-100'>
                {props.text}
            </textarea>
        </div>
    );
}

export default Editor;