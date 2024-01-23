import React from 'react';
import Cookies from 'js-cookie';
import { Card, Button, Icon, Label, Popup, ButtonGroup, CardGroup, Grid } from 'semantic-ui-react';
import moment from 'moment';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpen: false
        };
        this.selectJob = this.selectJob.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    selectJob(id) {
        console.log(id);
        var cookies = Cookies.get('talentAuthToken');
        var link = 'http://localhost:51689/listing/listing/closeJob';

        $.ajax({
            url: link,
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(id),
            success: function (res) {
                if (res.success == true) {
                    TalentUtil.notification.show(res.message, "success", null, null);
                    window.location = "/ManageJobs";
                } else {
                    TalentUtil.notification.show(res.message, "error", null, null)
                }
            }.bind(this)
        })
    }

    togglePopup() {
        this.setState(prevState => ({
            isPopupOpen: !prevState.isPopupOpen
        }));
    }

    render() {
        const { job } = this.props; // Assuming job data is passed as a prop
        const { id, title, location, summary, expiryDate, noOfSuggestions } = job;

        const expiredLabel = expiryDate && moment(expiryDate).isBefore(moment()) ? (
            <Label color='red'>Expired</Label>
        ) : <Label className="placeholder-label job-summary">Expired</Label>;

        return (
            <Card className="card-job-summary">
                <Card.Content>
                    <Label as='a' color='black' ribbon='right'>
                        <Icon name='user' /> {noOfSuggestions || 0}
                    </Label>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>
                        {location ? `${location.city}, ${location.country}` : 'No location'}
                    </Card.Meta>
                    <Card.Description className="description job-summary">{summary}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {expiredLabel}
                    <ButtonGroup size='mini' floated='right'>
                        <Popup
                            trigger={<Button icon="close" content="Close" basic color='blue' />}
                            header="Would you like to close this job?"
                            content={
                                <div>
                                    <Button
                                        className="ui button job-summary"
                                        onClick={() => this.selectJob(id)}
                                        color='green'
                                        size='mini'
                                        floated="right">Yes</Button>
                                    <Button
                                        onClick={this.togglePopup}
                                        color='red'
                                        size='mini'
                                        floated="right">No</Button>
                                </div>
                            }
                            open={this.state.isPopupOpen}
                            onOpen={this.togglePopup}
                            onClose={this.togglePopup}
                            on='click'
                            position='top left'
                        >
                        </Popup>
                        <Button icon="edit outline" content="Edit" basic color='blue' />
                        <Button icon="copy outline" content="Copy" basic color='blue' />
                    </ButtonGroup>
                </Card.Content>
            </Card>
        );
    }
}