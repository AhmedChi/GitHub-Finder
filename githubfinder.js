class Github {
    constructor(){
        this.client_id = '' // Once you set up a webhook add id here
        this.client_secret = '' // add secret here
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        
		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}`);
        
        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();

        return{
            profile: profileData,
            repos: repoData
        }
    }

}