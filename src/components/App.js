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
                {context => {
                    console.log('players here: ', context.players);
                    return (
                        context.players.map((player, index) =>
                            <Player
                                key={player.id.toString()}
                                name={player.name}
                                score={player.score}
                                id={player.id}
                                index={index}
                                isHighestScore={context.actions.isHighScore(player)}
                            />
                        )
                    )
                }}
            </Consumer>
            <AddPlayerForm/>
        </div>
    );
}

export default App;
