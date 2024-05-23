import React, { useState, MouseEvent, useEffect, useRef } from 'react';
import { IconButton, Box, Fab } from '@mui/material';
import styled from '@emotion/styled';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import EditableComment from './Comment';

interface Reaction {
  emoji: string;
  comment: string;
  position: {
    top: number;
    left: number;
  };
}

type ReactionComponentProps = Reaction & {
  onCommentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEmojiSelect: (emoji: string) => void;
};

const Reaction: React.FC<ReactionComponentProps> = ({
  emoji,
  comment,
  position,
  onCommentChange,
  onEmojiSelect: onEmojiSelectCallback
}) => {
  const [showEditReaction, setShowEditReaction] = useState(true); //change later
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiSelect = (emoji: any) => {
    onEmojiSelectCallback(emoji.native);
    setShowEmojiPicker(false);
  };

  const toggleEditReaction = () => {
    setShowEditReaction((previousValue) => !previousValue);
  };

  return (
    <Container {...position}>
      <Fab
        className="button-reaction"
        color="primary"
        onClick={toggleEditReaction}
      >
        {emoji}
      </Fab>
      {showEditReaction && (
        <ActionsBox
          sx={{ boxShadow: 3 }}
          className={`container-actions ${showEditReaction ? 'show' : ''}`}
        >
          <div className="container-fields">
            <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              {emoji}
            </IconButton>
            <EditableComment comment={comment} onChange={onCommentChange} />
          </div>

          <div className="container-picker">
            {showEmojiPicker && (
              <Picker data={data} onEmojiSelect={onEmojiSelect} set="native" />
            )}
          </div>
        </ActionsBox>
      )}
    </Container>
  );
};

const ActionsBox = styled(Box)`
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;

  margin-left: 80px;
  padding: 16px;
  border-radius: 10px;

  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  opacity: 0;
  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

const Container = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;

  & > .button-reaction {
    z-index: 3;

    line-height: normal;
    font-size: 25px;
  }

  & .container-actions {
    z-index: 4;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;

    margin-left: 80px;
    padding: 16px;
    border-radius: 10px;

    .container-picker {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  & .container-fields {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export default Reaction;
