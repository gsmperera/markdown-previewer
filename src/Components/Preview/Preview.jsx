import marked from 'marked';
import DOMPurify from 'dompurify';

function Preview(props) {
    const markdown = props.markdownText;
    const htmlText = marked(markdown, {breaks: true, headerIds: false});
    const cleanText = DOMPurify.sanitize(htmlText);

    return (
        <div className='col-6'>
            <header className='container bg-primary rounded-top text-light'>
                <i class="fas fa-search navbar-brand"></i>Preview
            </header>
            <div className="container border border-primary rounded-bottom h-100" dangerouslySetInnerHTML={{__html: cleanText}}></div>
        </div>
    );
}

export default Preview;