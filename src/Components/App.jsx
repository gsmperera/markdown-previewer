import React from 'react';

import defaultText from './defaultText';
import Header from './Header';
import Editor from './Editor';
import Preview from './Preview';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: defaultText,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClearButton = this.handleClearButton.bind(this);
    }
    
    handleInputChange(event) {
        this.setState({
            inputText: event.target.value,
        });
    }

    handleClearButton() {
        this.setState({
            inputText: '',
        });
    }

    render() {
        return (
            <div id='app-container' className="container d-flex flex-column justify-content-between p-0">
                    
                {/*Header Section*/}
                <div className="container-fluid p-0">
                    <Header />
                </div>
                
                {/*Edit and Preview Section*/}
                <div className="container-fluid flex-fill d-flex row align-items-stretch m-0 p-0">
                        <div className="col-md-6 d-flex align-items-stretch p-0">
                            <Editor text={this.state.inputText} handleInput={this.handleInputChange} handleClear={this.handleClearButton} />
                        </div>
                        <div className="col-md-6 d-flex align-items-stretch p-0">
                            <Preview markdownText={this.state.inputText}/>
                        </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
