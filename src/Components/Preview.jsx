import marked from 'marked';
import DOMPurify from 'dompurify';

function Preview(props) {
    const markdown = props.markdownText;
    const htmlText = marked(markdown, {breaks: true, headerIds: false});
    const cleanText = DOMPurify.sanitize(htmlText);

    return (
        <div className="container-fluid d-flex flex-column justify-content-between p-0 p-md-1 px-md-0 mb-1 mb-md-0">

            <header className="container-fluid bg-primary text-light">
                <i class="fas fa-search navbar-brand"></i>
                <h3 className="d-inline-block h4">Preview</h3>
            </header>

            <div className="container-fluid flex-fill border border-primary rounded-bottom overflow-auto" dangerouslySetInnerHTML={{__html: cleanText}}></div>

        </div>
    );
}

export default Preview;