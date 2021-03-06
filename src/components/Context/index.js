import React, {Component} from "react";

const scoreboardContext = React.createContext()

export class Provider extends Component {

    state = {
        players: [
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ]
    };

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            // Better Solution without mutating the state directly
            // New 'players' array – a copy of the previous `players` state
            const updatedPlayers = [...prevState.players];
            // A copy of the player object we're targeting
            const updatedPlayer = {...updatedPlayers[index]};

            // Update the target player's score
            updatedPlayer.score += delta;
            // Update the 'players' array with the target player's latest score
            updatedPlayers[index] = updatedPlayer;

            // Update the `players` state without mutating the original state
            return {
                players: updatedPlayers
            };
        });
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name: name,
                        score: 0,
                        id: this.state.players.length + 1
                    }
                ]
            }
        })
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    checkHighestScore = (player) => {
        console.log('gets execd');
        const scores = this.state.players.map(player => player.score)
        const highestScore = Math.max(...scores);
        return highestScore > 0 && highestScore === player.score;
        //return Math.max(...scores)
    }

    render() {
        return (
            <scoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer,
                    isHighScore: this.checkHighestScore
                }
            }}>
                {this.props.children}
            </scoreboardContext.Provider>
        );
    }
}

export const Consumer = scoreboardContext.Consumer;

