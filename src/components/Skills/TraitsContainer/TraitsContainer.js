import React from 'react';


import classes from './traitsContainer.module.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const TraitsContainer = () => {
    return (
            <div className={classes.traitsContainer}>
                <Accordion defaultActiveKey="0">
                <Card className={classes.card}>
                    <Card.Header className={classes.cardHeader}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className={classes.accordionToggle}>
                        <h1 className={classes.accordionHeader}>Communication</h1>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>clear and precise communication working with customers at Big W,
                    communication was vital to customers in JB Hi-Fi, so they purchased
                    the correct product. At Industry Trading, my role as Test Bench Team Leader,
                    I make sure everyone has a clear understanding of their current task, while 
                    keeping in touch with the Operations Manager, Sales reps and dispatch team to
                    make sure the warehouse operates smoothly.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={classes.card}>
                    <Card.Header className={classes.cardHeader}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className={classes.accordionToggle}>
                    <h1 className={classes.accordionHeader}>Teamwork</h1>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>As the Test Bench Team Leader, I make sure my team work together
                    and help one another to achieve the task as efficiently as 
                    possible. I teach them how to divide the workload up and keep a
                    constant flow of work outputted. I keep them updated with all 
                    upcoming and current jobs, so everyone has a solid understanding
                    of the work.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={classes.card}>
                    <Card.Header className={classes.cardHeader}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" className={classes.accordionToggle}>
                    <h1 className={classes.accordionHeader}>Problem Solving</h1>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Skills utilised when Scuba Diving and Snorkeling also finding 
                    solutions whilst working at The Landings as a maintenance man
                    fixing taps, drains, lights etc. As a Test Bench Team Leader,
                    I am one of the few who have to solve problems such as fixing 
                    IT equipment, usually hardware issues but also come across 
                    software issues mainly in the BIOS. Working on building websites,
                    I come across a lot of debugging and problem solving to achieve
                    the desired outcome.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={classes.card}>
                    <Card.Header className={classes.cardHeader}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3" className={classes.accordionToggle}>
                    <h1 className={classes.accordionHeader}>Desire to learn</h1>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>keen interest to know how things work, and how to build new things.
                    This shows in my warehouse experience in finding solutions to fix
                    problems and once learning how to solve the issue, teaching it to
                    others so as a team, we are able to effectively and quickly finish
                    the job. I enjoy learning new ways to accomplish my goals and 
                    code is effective in consistently learning better skills.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={classes.card}>
                    <Card.Header className={classes.cardHeader}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4" className={classes.accordionToggle}>
                    <h1 className={classes.accordionHeader}>Planning and organisation</h1> 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Able to schedule all tasks and organise all the materials needed
                    for the task. Through my warehouse experience, I created a 
                    whiteboard table to help organise the many jobs that are 
                    simultaneously happening which can get out of hand, especially 
                    where there are multiple shifts and different employees working.
                    This was highly regarded at my workplace and is now a consistent
                    procedure we do while completing all jobs.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={classes.card}>
                    <Card.Header className={classes.cardHeader}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5" className={classes.accordionToggle}>
                    <h1 className={classes.accordionHeader}>Self-Management</h1>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>willing to ask for more tasks and willing to help others.
                    I keep busy by always asking the other members on my team,
                    office and dispatch employees if they are in need of some 
                    extra help. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={classes.card}>
                    <Card.Header className={classes.cardHeader}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6" className={classes.accordionToggle}>
                    <h1 className={classes.accordionHeader}>EXTRA TRAIT</h1>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>willing to ask for more tasks and willing to help others.
                    I keep busy by always asking the other members on my team,
                    office and dispatch employees if they are in need of some 
                    extra help. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>


                </Accordion>
            </div>
    );
};

export default TraitsContainer;