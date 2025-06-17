import('./Player.scss')

export const Player = () =>{
    return(
        <div className={'player__wrapper'}>
            <div className={'player__progress-bar'}>

            </div>
            <div className={'player__track'}>
                <div className="player__track-img">
                    <img src="" alt="#"/>
                </div>
                <div className="player__track-info">
                    <div className="player__track-name">
                        <h2>NAME</h2>
                    </div>
                    <div className="player__track-lastname">
                        <h3>Autor</h3>
                    </div>
                </div>
                <div className="player__track-buttons">
                    <div className="player__track-back">
                        <button>
                            <img src="" alt=""/>
                        </button>
                    </div>
                    <div className="player__track-pause">
                        <button>
                            <img src="" alt=""/>
                        </button>
                    </div>
                    <div className="player__track-next">
                        <button>
                            <img src="" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}