job('NodeJS example') {
    scm {
        git('git://github.com/Max-pal/honestone.git') {  node ->
            node / gitConfigName('DSL User')
            node / gitConfigEmail('jenkins-dsl@newtech.academy')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs')
    }
    steps {
        dockerBuildAndPublish {
        repositoryName('macxsimilian/honestone')
        tag('${GIT_REVISION,length=9}')
        registryCredentials('dockeerhub')
        forcePull(false)
        forceTag(false)
        createFintferprints(false)
        skipDecorate()
        }
    }
}

