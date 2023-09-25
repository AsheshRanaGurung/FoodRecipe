import { Button, Flex } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { basePostURL } from '../App'

const ApiHit = () => {

    const [id, setId] = useState(null)
    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        if (id) {
            axios.get(`${basePostURL}/posts/${id}`,
                { cancelToken: cancelToken.token, }).then(
                    (res) => console.log(res)
                ).catch((err) => console.log(err))
        }
        return () => {
            console.log("hit")
            cancelToken.cancel()
        }
    }, [id])
    return (
        <>
            <div>ApiHit</div>
            <Flex gap={4}>
                <Button onClick={() => setId(1)}>Fetch user 1</Button>
                <Button onClick={() => setId(2)}>Fetch user 2</Button>
                <Button onClick={() => setId(3)}>Fetch user 3</Button>
            </Flex>
        </>
    )

}

export default ApiHit