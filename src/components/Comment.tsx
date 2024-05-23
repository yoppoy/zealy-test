import React, { useState, useRef, useEffect } from 'react';
import { TextField, Typography, Box } from '@mui/material';

interface EditableCommentProps {
  comment: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditableComment: React.FC<EditableCommentProps> = ({
  comment,
  onChange
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusOut = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <Box onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>
      {isEditing ? (
        <TextField
          inputRef={inputRef}
          value={comment}
          onChange={onChange}
          onBlur={handleFocusOut}
          variant="outlined"
          fullWidth
          multiline
          size="small"
        />
      ) : (
        <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
          {comment || 'Click to add a comment...'}
        </Typography>
      )}
    </Box>
  );
};

export default EditableComment;
