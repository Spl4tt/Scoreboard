import React from 'react';
import Header from './Header';
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import {Consumer} from "./Context";

const App = () => {
    return (
        <div className="scoreboard">
            <Header/>
            {/* Players list */}
            <Consumer>
                {
                    context => {
                        context.players.map((player, index) =>
                            <Player
                                name={player.name}
                                score={player.score}
                                id={player.id}
                                key={player.id.toString()}
                                index={index}
                                isHighestScore={context.checkHighestScore(player)}
                            />
                        )
                    }
                }
            </Consumer>
            <AddPlayerForm/>
        </div>
    );
}

export default App;
