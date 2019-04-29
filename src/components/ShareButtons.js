import React from 'react'
import {
    FacebookShareButton,
    WorkplaceShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    WorkplaceIcon,
    TwitterIcon,
    LinkedinIcon,
} from 'react-share'

const ShareButtons = () => {
    const props = {
        quote: "Take a look at this app hosted on Heroku",
        url: "https://grigoriu-stefan-music-list-app.netlify.com/",
        hashtags: ['reactjs', 'reactmodal', 'musiclist'],
        className: "share-item"
    }
    return (
        <div className="share-container">
            <FacebookShareButton {...props} >
                <FacebookIcon
                    size={32}
                    round={true}
                />
            </FacebookShareButton>
            <TwitterShareButton {...props} >
                <TwitterIcon
                    size={32}
                    round={true}
                />
            </TwitterShareButton>
            <WorkplaceShareButton {...props} >
                <WorkplaceIcon
                    size={32}
                    round={true}
                />
            </WorkplaceShareButton>
            <LinkedinShareButton {...props} >
                <LinkedinIcon
                    size={32}
                    round={true}
                />
            </LinkedinShareButton>
        </div>
    )
}

export default ShareButtons;