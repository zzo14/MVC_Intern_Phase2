import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import LoggedInBanner from '../../Layout/Banner/LoggedInBanner.jsx';
import { LoggedInNavigation } from '../../Layout/LoggedInNavigation.jsx';
import { JobSummaryCard } from './JobSummaryCard.jsx';
import { BodyWrapper, loaderData } from '../../Layout/BodyWrapper.jsx';
import { Pagination, Icon, Dropdown, Checkbox, Accordion, Form, Segment, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'; 

export default class ManageJob extends React.Component {
    constructor(props) {
        super(props);
        let loader = loaderData
        loader.allowedUsers.push("Employer");
        loader.allowedUsers.push("Recruiter");
        //console.log(loader)
        this.state = {
            loadJobs: [],
            loaderData: loader,
            activePage: 1,
            sortBy: {
                date: "desc"
            },
            sortText: "Newest first",
            filter: {
                showActive: true,
                showClosed: false,
                showDraft: true,
                showExpired: true,
                showUnexpired: true
            },
            totalPages: 1,
            activeIndex: ""
        }
        this.loadData = this.loadData.bind(this);
        this.init = this.init.bind(this);
        this.loadNewData = this.loadNewData.bind(this);
        //your functions go here
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
    };

    init() {
        let loaderData = TalentUtil.deepCopy(this.state.loaderData)
        loaderData.isLoading = false;
        //this.setState({ loaderData });//comment this

        //set loaderData.isLoading to false after getting data
        this.loadData(() =>
            this.setState({ loaderData })
        )
        //console.log(this.state.loaderData)
    }

    componentDidMount() {
        this.init();
    };

    loadData(callback) {
        var link = 'https://talentservicestalent20240123184103.azurewebsites.net/listing/listing/getSortedEmployerJobs';
        var cookies = Cookies.get('talentAuthToken');
        const { activePage, sortBy, filter } = this.state;
        var params = new URLSearchParams({
            activePage: activePage,
            sortbyDate: sortBy.date,
            showActive: filter.showActive,
            showClosed: filter.showClosed,
            showDraft: filter.showDraft,
            showExpired: filter.showExpired,
            showUnexpired: filter.showUnexpired
        });
       // your ajax call and other logic goes here
        $.ajax({
            url: link + '?' + params.toString(),
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                if (res.success == true) {
                    this.setState({
                        loadJobs: res.myJobs,
                        totalPages: Math.ceil(res.totalCount / 6)
                    })
                } else {
                    TalentUtil.notification.show(res.message, "error", null, null)
                }
                if (callback) {
                    callback();
                }
            }.bind(this)
        })
    }

    loadNewData(data) {
        var loader = this.state.loaderData;
        loader.isLoading = true;
        data[loaderData] = loader;
        this.setState(data, () => {
            this.loadData(() => {
                loader.isLoading = false;
                this.setState({
                    loadData: loader
                })
            })
        });
    }

    handleItemClick(key) {
        this.setState(prevState => ({
            filter: Object.assign({}, prevState.filter, { [key]: !prevState.filter[key] }),
            activePage: 1
        }), () => {
            this.loadData();
        });
    }

    handleSortChange(direction) {
        //  Update the sorting direction in the state
        const sortText = direction === 'desc' ? 'Newest first' : 'Oldest first';
        this.setState({ sortBy: { date: direction }, sortText }, () => {
            // Fetch data after status update
            this.loadData();
        });
    }

    handlePaginationChange(e, { activePage }) {
        this.setState({ activePage }, () => {
            this.loadNewData({ activePage });
        });
    };

    render() {
        return (
            <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
                <section className="page-body">
                    <div className="ui container">
                        <div className="ui grid">
                            <div className="row">
                                <h1>List of Jobs</h1>
                            </div>
                            <div className="row">
                                <Icon name="filter" /> <span>Filter: </span>
                                <Dropdown className="ui dropdown manage-jobs" text='Choose Filter' simple item inline>
                                    <Dropdown.Menu>
                                        {Object.keys(this.state.filter).map((key) => (
                                            <Dropdown.Item key={key} onClick={() => this.handleItemClick(key)}>
                                                <Checkbox
                                                    label={"Show " + key.slice(4)}
                                                    name={key}
                                                    checked={this.state.filter[key]}
                                                />
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Icon name="calendar alternate outline" /> <span>Sort by date: </span>
                                <Dropdown className="ui dropdown manage-jobs" text={this.state.sortText} simple item inline>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='Newest first' onClick={() => this.handleSortChange('desc')} />
                                        <Dropdown.Item text='Oldest first' onClick={() => this.handleSortChange('asc')} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="row">
                                {this.state.loadJobs.length > 0 ? (<Card.Group itemsPerRow={3}>
                                    {this.state.loadJobs.map(job => (
                                        <JobSummaryCard key={job.id} job={job} />
                                    ))}
                                </Card.Group>) : (<span>No Jobs Found</span>)}
                            </div>
                            <div className="row">
                                <div className="sixteen wide center aligned padded column">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        onPageChange={this.handlePaginationChange}
                                        totalPages={this.state.totalPages}
                                        ellipsisItem={null}
                                        firstItem={null}
                                        lastItem={null}
                                        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                                        firstItem={{ content: <Icon name='angle double left' />, icon: true, disabled: this.state.activePage === 1 }}
                                        lastItem={{ content: <Icon name='angle double right' />, icon: true, disabled: this.state.activePage === this.state.totalPages }}
                                        prevItem={{ content: <Icon name='angle left' />, icon: true, disabled: this.state.activePage === 1 }}
                                        nextItem={{ content: <Icon name='angle right' />, icon: true, disabled: this.state.activePage === this.state.totalPages }}
                                    />
                                </div>
                            </div>
                            <div className="row"></div>
                        </div>
                    </div>
                </section>
            </BodyWrapper>
        )
    }
}