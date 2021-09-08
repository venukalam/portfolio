import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Twitter() {
    return (
        <div>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="VenuKalam"
                options={{ height: 400 }}
            />
        </div>
    //       <div>
    //       <a className="twitter-timeline" data-width="500" data-height="1000" data-theme="dark" href="https://twitter.com/VenuKalam?ref_src=twsrc%5Etfw">
    //           Tweets by VenuKalam</a>
    //       <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    //   </div>
    );
}

export default Twitter;
