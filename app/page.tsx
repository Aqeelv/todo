"use client"
import { Button, Flex, ListItem, UnorderedList, Text, Input, Box, ButtonGroup } from '@chakra-ui/react'
import { use, useState } from 'react'
export default function Home() {
  const [tasks, setTasks] = useState(['Learn Next Js 13', 'Learn React Js','Learn FIGMA'])
  const [Item, setItem] = useState("")

  function removeItem(taskName: string) {
    setTasks(tasks.filter(task => {
      return task != taskName
    }))
  }


  function AddItem() {
    if (Item != "" && !tasks.includes(Item)) {
      let temp = tasks;
      temp.push(Item)
      setTasks(temp)
      setItem("")
    }
  }
  return (
    <>
      <Flex
        padding='2'
        backgroundColor='ButtonHighlight'
        flexDirection="column">
        <Text fontSize={['2xl', '3xl', '3xl']} textAlign='center' color='black' >PIAIC TODO APP </Text>
        <Input
          placeholder='ENTER YOUR TODO'
          value={Item}
          color="black"
          onChange={(e) => {
            setItem(e.target.value)
          }}
        >
        </Input>


        <Button size='md' m='4' bgColor='twitter.900' color='white'
          onClick={AddItem}>ADD TODO</Button>
      </Flex>
      <Box
         bgGradient='linear(to-r, green.300, green.700)'
      >
        <UnorderedList
          p='2'

        >
          {tasks.map((task) => {
            return (<ListItem key={task}   >
              {task}
              <Button size='sm' bgColor='ActiveCaption' color='grey'
                ml={['80%', "85%", "92%"]}
                mt='-9'
                onClick={() => {
                  removeItem(task)
                }}>
                Delete

              </Button>
            </ListItem>)
          })}
        </UnorderedList>
      </Box>

    </>)
}