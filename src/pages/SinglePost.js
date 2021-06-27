import React from "react"
import {Link} from "react-router-dom"

const SinglePost = ({posts, match}) => {
    const id = parseInt(match.params.id)
    const post = posts.find((post) => post.id === id)

    return (
        <div>
            <h2>{post.battletag} - {post.personal_sr} {post.role}</h2>
            <h3>Lobby SR: {post.lobby_sr}</h3>
            <h3>Replay Code: {post.replay_code}</h3>
            <h3>{post.details}</h3>
            <Link to="/posts">
                <button>Back</button>
            </Link>

        </div>
    )
}

export default SinglePost