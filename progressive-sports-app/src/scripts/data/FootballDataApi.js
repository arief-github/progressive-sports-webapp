class FootballDataApi {
    APIKey = "";

    baseUrl = "";

    PRECACHE_PREFIX = "";

    PRECACHE_SUFFIX = "";

    PRECACHE_NAME = "";

    API_CACHE_NAME = "";

    IMAGE_CACHE_NAME = "";

    constructor() {
        this.APIKey = "fdaae91cecbc4992be43f96cc4ba9598";
        this.baseUrl = "https://api.football-data.org/v2";
        this.PRECACHE_PREFIX = "progressive-sports";
        this.PRECACHE_SUFFIX = "v1";
        this.PRECACHE_NAME = "precache";
        this.API_CACHE_NAME = "api-cache";
        this.IMAGE_CACHE_NAME = "img-cache";
    }

    async request(request) {
        return await $.ajax({
            type: `GET`,
            url: `${this.baseUrl}/${request}`,
            headers: {
                "X-Auth-Token": this.APIKey,
            }
        });
    }

    async getAllMatches({ dateFrom, dateTo }) {
        let data;
        await this.request(`matches?dateFrom=${dateFrom}&dateTo=${dateTo}`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getMatchById({ id }) {
        let data;
        await this.request(`matches/${id}`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getAllCompetitions() {
        let data;
        await this.request('competitions/')
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getCompetitionsById({ id }) {
        let data;
        await this.request(`competitions/${id}`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getAllTeamsByIdCompetitions({ id }) {
        let data;
        await this.request(`competitions/${id}/teams`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getTeams({ id }) {
        let data;
        await this.request(`teams/${id}`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getAllCompetitionStandingsById({ id }) {
        let data;
        await this.request(`competitions/${id}/standings`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getMatchesByIdCompetitions({ id, dateFrom, dateTo }) {
        let data;
        await this.request(`competitions/${id}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getTopScorersByIdCompetitions({ id }) {
        let data;
        await this.request(`competitions/${id}/scorers`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getDetailPlayers({ id }) {
        let data;
        await this.request(`players/${id}`)
            .then((response, status) => {
                data = (status !== 'error') ? response : status;
            });
        return data;
    }

    async getDetailPlayersAndMatch({ id }) {
        let data;
        await this.request(`players/${id}/matches`)
        .then((response, status) => {
            data = (status !== 'error') ? response : status;
        })
        return data;
    }
}

export default FootballDataApi;