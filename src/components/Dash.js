import React, { Component } from 'react';

export default class Dash extends Component {
    render() {
        return (
            <div className='center_piece'>
                <div className='form'>
                    <div>
                    <button id='add_new'>Add new property</button>
                    </div>
                    <div className='filter_row'>
                        <p>List properties with "desired rent" greator than: $</p><input placeholder='0'></input><button>Filter</button><button>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}