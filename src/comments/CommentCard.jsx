import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    comment: {
        width: 300,
        height: 49,
        border: '2px solid #141b3d',
        marginBottom: 10,
        borderRadius:"10px"
    },
    users: {
        color: 'blue'
    }
}))
const CommentCard = ({item}) => {
    const classes = useStyles()
    return (
        <div className={classes.comment}>
            <Typography className={classes.users}>
                {item.user}
            </Typography>
            <Typography>
            {item.comment}

            </Typography>
        </div>
    );
};

export default CommentCard;