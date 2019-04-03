import React from 'react';
import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    TumblrShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    TumblrIcon,
} from 'react-share'

const ReactShare = () => {
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
                title="Take a look at my app hosted on heroku.com"
                hashtags={['reactjs', 'reactmodal', 'music']}
            >
                <TwitterIcon
                    size={32}
                    round={true}
                />
            </TwitterShareButton>
            <WhatsappShareButton
                url="heroku.com"
                className="share-item"
                title="Take a look at my app hosted on Heroku"
            >
                <WhatsappIcon
                    size={32}
                    round={true}
                />
            </WhatsappShareButton>
            <TumblrShareButton
                url="heroku.com"
                className="share-item"
                title="Take a look at my app hosted on Heroku"
                tags={['reactjs', 'reactmodal', 'music']}
            >
                <TumblrIcon
                    size={32}
                    round={true}
                />
            </TumblrShareButton>
        </div>
    );
};

export default ReactShare;