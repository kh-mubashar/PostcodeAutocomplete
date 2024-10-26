// components/Autocomplete.tsx
import { useState } from 'react';
import styled from 'styled-components';
import { usePostcodeDetails } from '@/hooks/usePostcodeDetails';
import { usePostcodeAutocomplete } from '@/hooks/usePostcodeAutocomplete';

const Container = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SuggestionsBox = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 4px;
  max-height: 150px;
  overflow-y: auto;
  background-color: #fff;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Autocomplete = () => {
  const [query, setQuery] = useState('');
  const [queryDetails, setQueryDetails] = useState('');
  
  const { data: suggestions } = usePostcodeAutocomplete(query);
  const { data: postcodeDetails } = usePostcodeDetails(queryDetails);
  console.log(postcodeDetails);

  const onClickHandler = (value: string)=>{
    setQueryDetails(value);
    setQuery('');
  }
  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter postcode"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions && (
        <SuggestionsBox>
          {suggestions.map((suggestion) => (
            <SuggestionItem onClick={()=>onClickHandler(suggestion)} key={suggestion}>{suggestion}</SuggestionItem>
          ))}
        </SuggestionsBox>
      )}
    </Container>
  );
};
