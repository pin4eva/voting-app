import React, { useState } from 'react';
import _ from 'lodash'
import { Button, Card, Divider, Image, Placeholder, Header, Icon, Modal  } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const cards = [
    {
        id: 1,
        avatar: '/images/avatar/large/helen.jpg',
        header: 'Mr. Peter Akaliro',
        description: 'Web developer',
    },
    {
        id: 2,
        avatar: '/images/avatar/large/matthew.png',
        header: 'Mr. David Sampson',
        description: 'Web developer',
    },
    {
        id: 3,
        avatar: '/images/avatar/large/molly.png',
        header: 'Mr. Bryan',
        description: 'UI/UX designer',
    },
]

const VotingSection = () => {
    const [loading, setLoading] = useState(false);
    const [voteForA, setVoteForA] = useState(0);
    const [voteForB, setVoteForB] = useState(0);
    const [voteForC, setVoteForC] = useState(0);
    const [voted, setVoted] = useState(false);
    const [open, setOpen] = useState(false)

    // const handleLoadingClick = () => {
    //     setLoading(true);

    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 3000)
    // }



    return (
        <>
            {voteForA} - {voteForB} - {voteForC}
            {/* <Button loading={loading} onClick={handleLoadingClick} primary>
        Simulate loading
      </Button> */}
            <Divider />

            <Card.Group doubling itemsPerRow={3} stackable>
                {_.map(cards, (card) => (
                    <Card key={card.header}>
                        {loading ? (
                            <Placeholder>
                                <Placeholder.Image square />
                            </Placeholder>
                        ) : (
                            <Image src={card.avatar} />
                        )}

                        <Card.Content>
                            {loading ? (
                                <Placeholder>
                                    <Placeholder.Header>
                                        <Placeholder.Line length='very short' />
                                        <Placeholder.Line length='medium' />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length='short' />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            ) : (
                                <>
                                    <Card.Header>{card.header}</Card.Header>
                                    <Card.Meta>{card.date}</Card.Meta>
                                    <Card.Description>{card.description}</Card.Description>
                                </>
                            )}
                        </Card.Content>

                        <Card.Content extra>
                            <Button
                             disabled={voted}
                                onClick={() => 
                                    [card.id === 1 ? setVoteForA(voteForA + 1) 
                                    : card.id === 2 ? setVoteForB(voteForB + 1) 
                                    : setVoteForC(voteForC + 1), setVoted(true), 
                                    setOpen(true)
                                ]}
                                primary>
                               Vote
                            </Button>
                         
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>

{/* FOR MY MODAL */}

<Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
    //   trigger={<Button>Basic Modal</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        You are about to vote for this candidate
      </Header>
      <Modal.Content>
        <p>
         Are you sure this is the candidate you want to vote for?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false) }>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
        </>
    );
}

export default VotingSection;