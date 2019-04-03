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
    return (
        <div className="share-container">
            <FacebookShareButton
                className="share-item"
                url="heroku.com"
                quote="Take a look at my app hosted on Heroku"
            >
                <FacebookIcon
                    size={32}
                    round={true}
                />
            </FacebookShareButton>
            <TwitterShareButton
                className="share-item"
                url="heroku.com"
                title="Take a look at my app hosted on heroku.com "
                hashtags={['reactjs', 'reactmodal', 'musiclist']}
            >
                <TwitterIcon
                    size={32}
                    round={true}
                />
            </TwitterShareButton>
            <WorkplaceShareButton
                url="heroku.com"
                className="share-item"
                quote="Take a look at my app hosted on Heroku"
                hashtags={['reactjs', 'reactmodal', 'musiclist']}
            >
                <WorkplaceIcon
                    size={32}
                    round={true}
                />
            </WorkplaceShareButton>
            <LinkedinShareButton
                url="heroku.com"
                className="share-item"
                title="Take a look at my app hosted on Heroku"
                tags={['reactjs', 'reactmodal', 'music']}
            >
                <LinkedinIcon
                    size={32}
                    round={true}
                />
            </LinkedinShareButton>
        </div>
    )
}

export default ShareButtons;