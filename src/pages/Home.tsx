import styled from '@emotion/styled';
import { Box, Button, Container, Typography } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Reaction from '../components/Reaction';
import ReactionComponent from '../components/Reaction';
import withReactionEvent from '../components/withReactionEvent';

const TypographyWithReaction = withReactionEvent(Typography);

const PageHome: React.FunctionComponent = () => {
  const [reactions, setReactions] = useState<Reaction[]>([
    { emoji: '🫣', comment: 'Hey There...', position: { top: 100, left: 100 } },
    { emoji: '🫣', comment: 'Looks like...', position: { top: 200, left: 100 } },
    {
      emoji: '🫣',
      comment: 'I ran out of...',
      position: { top: 300, left: 100 }
    },
    { emoji: '🫣', comment: 'Time...', position: { top: 400, left: 100 } },
    { emoji: '🫣', comment: 'But...', position: { top: 500, left: 100 } },
    {
      emoji: '🫣',
      comment: 'Give the code a quick look...',
      position: { top: 600, left: 100 }
    },
    {
      emoji: '🫣',
      comment: 'Some features were almost ready :/',
      position: { top: 700, left: 100 }
    }
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  // const onCreateReaction = useCallback(
  //   (reaction: Reaction) => {
  //     setReactions((prevReactions) => [...prevReactions, reaction]);
  //   },
  //   [setReactions]
  // );

  // useEffect(() => {
  //   const handleClick = (event: MouseEvent) => {
  //     if (
  //       containerRef.current &&
  //       containerRef.current.contains(event.target as Node)
  //     ) {
  //       const { clientX, clientY } = event;

  //       onCreateReaction({
  //         emoji: '🫠',
  //         comment: '',
  //         position: { top: clientY, left: clientX }
  //       });
  //     }
  //   };

  //   const currentContainer = containerRef.current;
  //   if (currentContainer) {
  //     currentContainer.addEventListener('click', handleClick);
  //   }

  //   return () => {
  //     if (currentContainer) {
  //       currentContainer.removeEventListener('click', handleClick);
  //     }
  //   };
  // }, [onCreateReaction]);

  const onCommentChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const comment = event.target.value;
      setReactions((prevReactions) => {
        const newReactions = [...prevReactions];
        newReactions[index].comment = comment;
        return newReactions;
      });
    };

  const onEmojiSelect = (index: number) => (emoji: string) => {
    setReactions((prevReactions) => {
      const newReactions = [...prevReactions];
      newReactions[index].emoji = emoji;
      return newReactions;
    });
  };

  return (
    <ContainerStyled
      ref={containerRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Box sx={{ my: 4 }} position="relative">
        <TypographyWithReaction variant="h4" sx={{ mb: 2 }} textAlign="center">
          It ain't much, but it's honest work
        </TypographyWithReaction>
      </Box>
      <div className="reaction-container">
        {reactions.map((reaction, index) => (
          <ReactionComponent
            key={index}
            emoji={reaction.emoji}
            comment={reaction.comment}
            position={reaction.position}
            onEmojiSelect={onEmojiSelect(index)}
            onCommentChange={onCommentChange(index)}
          />
        ))}
      </div>
    </ContainerStyled>
  );
};

const ContainerStyled = styled(Container)`
  .reaction-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export default PageHome;
