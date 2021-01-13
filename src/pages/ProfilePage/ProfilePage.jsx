import React, { useState,  useEffect } from 'react';
import {  Grid } from 'semantic-ui-react'
import userService from '../../utils/userService';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import ProfilePostDisplay from '../../components/ProfilePostDisplay/ProfilePostDisplay';
import PageHeader from '../../components/Header/Header';
import { useLocation, useHistory } from 'react-router-dom';

export default function ProfilePage(){

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    const location = useLocation()
    
    
    async function getProfile(){
       
        try {    

            const username = location.pathname.substring(1)
            // location.pathname returns /jimbo so we need to cut off the / using the js method substring
            // This gets the username from the url! 
            console.log(username)
            const data = await userService.getProfile(username);
            console.log(data)
            setLoading(() => false)
            setPosts(() => [...data.posts])
            setUser(() => setUser(data.user))
        } catch(err){
            console.log(err)
            setError(err)
        }
        
        
    }

    useEffect(() => {
        getProfile()
       
    }, [])



    return (
    
        <>
        { loading ?  
            <h1>Loading.....</h1>
            :
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <PageHeader />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <ProfileBio user={user}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column style={{ maxWidth: 750 }}>
                        <ProfilePostDisplay />
                    </Grid.Column>
                </Grid.Row>
            </Grid>   
            }           
        </>    
    )
}
