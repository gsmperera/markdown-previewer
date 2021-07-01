import React from 'react';

import defaultText from './defaultText';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: defaultText,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        this.setState({
            inputText: event.target.value,
        });
    }

    render() {
        return (
                <>
                    <div className="container-fluid p-4">
                        <h1 className='text-center text-primary'>Markdown Previewer</h1>
                    </div>
                    <div className="container pb-3">
                        <div className="row">
                            <Editor text={this.state.inputText} handleInput={this.handleInputChange}/>
                            <Preview markdownText={this.state.inputText}/>
                        </div>
                    </div>
                </>
                );
    }
}

// function App() {
//     return (
//         <>
//             <div className="container-fluid p-4">
//                 <h1 className='text-center text-primary'>Markdown Previewer</h1>
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <Editor />
//                     <Preview />
//                 </div>
//             </div>
//         </>
//     );
// }

export default App;