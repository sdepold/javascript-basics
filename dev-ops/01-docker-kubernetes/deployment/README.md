# Deployment to tess.io

## Log into tess

```
tess login -c fcp-dev
```

## Creating an app

Q:

- What is an app?
- Why do we need one?
- What is the diff between owner and account?

Notes
- pagerDutyService PR2S9FI is "1424 - Regional Product Development Germany Team"
- Command is going to ask for data classification --> Go with `no` + `PUBLIC`

```sh
tess create application <your app name> --type=generic --category=web --owner=<your username> --escalationOwner=<your manager> --account=<your username> --issueTracker=https://jirap.corp.ebay.com/projects/JUSTDE/summary --pagerDutyService=https://ebay-cpt.pagerduty.com/service-directory/PR2S9FI --gitRepo=https://github.corp.ebay.com/sdepold/docker-fe-test
```

Result should look like this:

```
application.apps.tess.io/sdepoldtodoapp created
```

## Creating a namespace

```
tess create -f deployment/01-namespace.yml
```

### Questions

- Where is the namespace used (FQDN)?
- How does a namespace relate to an application

```
tess create -f deployment/01-namespace.yml
```

### Useful commands

```
tess describe namespace sdepoldtodoapp-dev # To get meta info about the namespace
```

## Creating an application instance

```
tess create -f deployment/02-application-instance.yml
```

### Questions

- What is an application instance?

### Useful commands

```
tess describe applicationinstance sdepoldtodoapps-appinstance -n sdepoldtodoapp-dev
tess describe applicationinstance sdepoldtodoapps-appinstance -n sdepoldtodoapp-dev --context 130
```
