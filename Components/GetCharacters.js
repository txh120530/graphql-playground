import React, {useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LOAD_CHARACTERS} from '../GraphQL/Queries';


function GetCharacters() {
	const {error, loading, data} = useQuery(LOAD_CHARACTERS);

	useEffect(()=>{
		console.log('Error:',error)
		console.log(data);
	}, [data]);

    return (
      <div></div>  
    );
}


export default GetCharacters;
