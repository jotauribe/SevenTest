const githubResponse = {
  username: 'Timer',
  events: [
    {
      id: '10614311531',
      type: 'ReleaseEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 70107786,
        name: 'zeit/next.js',
        url: 'https://api.github.com/repos/zeit/next.js'
      },
      payload: {
        action: 'published',
        release: {
          url: 'https://api.github.com/repos/zeit/next.js/releases/20652603',
          assets_url:
            'https://api.github.com/repos/zeit/next.js/releases/20652603/assets',
          upload_url:
            'https://uploads.github.com/repos/zeit/next.js/releases/20652603/assets{?name,label}',
          html_url:
            'https://github.com/zeit/next.js/releases/tag/v9.1.2-canary.2',
          id: 20652603,
          node_id: 'MDc6UmVsZWFzZTIwNjUyNjAz',
          tag_name: 'v9.1.2-canary.2',
          target_commitish: '6efa1daf34278374a9c73937f80363d42cfacdca',
          name: 'v9.1.2-canary.2',
          draft: false,
          author: {
            login: 'Timer',
            id: 616428,
            node_id: 'MDQ6VXNlcjYxNjQyOA==',
            avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/Timer',
            html_url: 'https://github.com/Timer',
            followers_url: 'https://api.github.com/users/Timer/followers',
            following_url:
              'https://api.github.com/users/Timer/following{/other_user}',
            gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/Timer/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/Timer/subscriptions',
            organizations_url: 'https://api.github.com/users/Timer/orgs',
            repos_url: 'https://api.github.com/users/Timer/repos',
            events_url: 'https://api.github.com/users/Timer/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/Timer/received_events',
            type: 'User',
            site_admin: false
          },
          prerelease: true,
          created_at: '2019-10-11T21:25:34Z',
          published_at: '2019-10-11T21:26:42Z',
          assets: [],
          tarball_url:
            'https://api.github.com/repos/zeit/next.js/tarball/v9.1.2-canary.2',
          zipball_url:
            'https://api.github.com/repos/zeit/next.js/zipball/v9.1.2-canary.2',
          body:
            '### Patches \r\n\r\n- Add src directory support for global CSS: #8999\r\n- Update README-zh-CN.md static-file-serving-eg-images: #9002\r\n- Add CSS fixture for src dir: #9001\r\n- Fix global Bluebird causing HMR connection to fail: #9009\r\n- Change to public folder in with-loading example: #9016\r\n- Update Auth0 example with new version: #9020\r\n- Next offline: #9010\r\n- Test no-path relative CSS imports: #9028\r\n- Add buildId to SPR data routes: #8929\r\n- Do Not Rely on Module State: #8968\r\n- Add @zeit/fetch example: #9029\r\n- Update to error on usage of serverRuntimeConfig with serverless: #9030\r\n- Replace the deprecated Create Next App URL: #9032\r\n- Trigger error overlay for dynamic route mismatch: #9031\r\n- Updated multiple examples to use /public: #9033\r\n- Update storybook example to v5.2 with CSF: #9036\r\n- Update README.md: #9040\r\n- Remove static optimization from message: #9045\r\n\r\n### Credits \r\n\r\nHuge thanks to @ykzts, @manfwh, @ijjk, @ismamz, @sandrinodimattia, @armspkt, @timneutkens, @lfades, @rafaelalmeidatk, and @SZharkov for helping!'
        }
      },
      public: true,
      created_at: '2019-10-11T21:26:42Z',
      org: {
        id: 14985020,
        login: 'zeit',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/zeit',
        avatar_url: 'https://avatars.githubusercontent.com/u/14985020?'
      }
    },
    {
      id: '10614306834',
      type: 'CreateEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 70107786,
        name: 'zeit/next.js',
        url: 'https://api.github.com/repos/zeit/next.js'
      },
      payload: {
        ref: 'v9.1.2-canary.2',
        ref_type: 'tag',
        master_branch: 'canary',
        description: 'The React Framework',
        pusher_type: 'user'
      },
      public: true,
      created_at: '2019-10-11T21:25:48Z',
      org: {
        id: 14985020,
        login: 'zeit',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/zeit',
        avatar_url: 'https://avatars.githubusercontent.com/u/14985020?'
      }
    },
    {
      id: '10614306766',
      type: 'PushEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 70107786,
        name: 'zeit/next.js',
        url: 'https://api.github.com/repos/zeit/next.js'
      },
      payload: {
        push_id: 4140644605,
        size: 1,
        distinct_size: 1,
        ref: 'refs/heads/canary',
        head: '6efa1daf34278374a9c73937f80363d42cfacdca',
        before: '58cc1d3be49f297ccd4c6fba236429b22906b5ef',
        commits: [
          {
            sha: '6efa1daf34278374a9c73937f80363d42cfacdca',
            author: {
              email: 'joe.haddad@zeit.co',
              name: 'Joe Haddad'
            },
            message: 'v9.1.2-canary.2',
            distinct: true,
            url:
              'https://api.github.com/repos/zeit/next.js/commits/6efa1daf34278374a9c73937f80363d42cfacdca'
          }
        ]
      },
      public: true,
      created_at: '2019-10-11T21:25:48Z',
      org: {
        id: 14985020,
        login: 'zeit',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/zeit',
        avatar_url: 'https://avatars.githubusercontent.com/u/14985020?'
      }
    },
    {
      id: '10612303489',
      type: 'PushEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 67753070,
        name: 'zeit/now',
        url: 'https://api.github.com/repos/zeit/now'
      },
      payload: {
        push_id: 4139598415,
        size: 23,
        distinct_size: 1,
        ref: 'refs/heads/now-next/spr-support',
        head: '4badb25b48fb353ae13f69dd4c1d4a9b672f8a64',
        before: 'c0fd4e4d7b14ae171f71ad6c1138d4218b4b89dc',
        commits: [
          {
            sha: 'c3020e30710003095f21dfec8e8d42d0a8ccbdc2',
            author: {
              email: 'offero@users.noreply.github.com',
              name: 'Chris'
            },
            message:
              '[now-python] Encode body as utf-8 before making a request (#3093)\n\nFixes #3091',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/c3020e30710003095f21dfec8e8d42d0a8ccbdc2'
          },
          {
            sha: 'd9bb6c8a54b298b2cbd8420b366e7a4ae7029dcc',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              "[now-cli][now-client] Fix `--local-config` flag and `files` key (#3117)\n\nThis PR is a followup to #3110 that fixes the first deployment when using the `--local-config` flag and also fixes v1 deployments using the [`files`](https://zeit.co/docs/v1/features/configuration/#files-(array)) key.\r\n\r\nThe tests have been adjusted so we don't regress in both cases.\r\n\r\nFixes #3099 \r\nFixes #3105\r\nFixes #3107\r\nFixes #3109\r\n\r\n[PRODUCT-350] #close\n\n[PRODUCT-350]: https://zeit.atlassian.net/browse/PRODUCT-350",
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/d9bb6c8a54b298b2cbd8420b366e7a4ae7029dcc'
          },
          {
            sha: 'e4d691eda1f7dc79202a23a5c6bc0433c0e411a2',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              'Publish\n\n - now@16.1.4-canary.14\n - now-client@5.1.1-canary.7\n - @now/next@1.0.0-canary.9\n - @now/python@0.2.17-canary.5\n - @now/static-build@0.9.9-canary.12',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/e4d691eda1f7dc79202a23a5c6bc0433c0e411a2'
          },
          {
            sha: '6398ef194cedd74777c38ab1aa9d99e2838b5bcd',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message:
              '[now-client] [now-cli] Handle `notice` type (#3122)\n\nThis PR handle `notice` type from API respond.',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/6398ef194cedd74777c38ab1aa9d99e2838b5bcd'
          },
          {
            sha: '1fe8317f1e587d2d30aa8560faa4feacce934988',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              '[now-cli][now-client] Fix v1 `files` when defining a directory (#3123)\n\nThis is a follow up to #3117 which added a fix for `files` but did not observe directories.\r\n\r\nThis PR fixes the scenario where a directory is defined such that all files inside the directory should be added uploaded (recursively).\r\n\r\nThanks to @williamli \r\n\r\n[PRODUCT-350] #close\r\n\r\n[PRODUCT-350]: https://zeit.atlassian.net/browse/PRODUCT-350',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/1fe8317f1e587d2d30aa8560faa4feacce934988'
          },
          {
            sha: 'eeffb550214981467fdfe8e2dfbadf3fea936d08',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              'Publish\n\n - now@16.1.4-canary.15\n - now-client@5.1.1-canary.8',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/eeffb550214981467fdfe8e2dfbadf3fea936d08'
          },
          {
            sha: '85170d7231b665ad0753af26fe6be5d173b8a8b0',
            author: {
              email: 'n@n8.io',
              name: 'Nathan Rajlich'
            },
            message:
              '[now-cli] Remove `dev: "now dev"` script detection logic in `now dev` (#3088)\n\nAs of https://github.com/zeit/now-builders/pull/679, this logic is unnecessary because the `@now/static-build` builder will never end up executing the `dev` script when there is a `now.json` file present (and thus, no builds present, aka zero config mode).\n\nAlso, statically detecting the `now dev` command from the script command is brittle, as the command could execute a separate shell script that ends up executing `now dev` (and this detection logic would be a false negative).',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/85170d7231b665ad0753af26fe6be5d173b8a8b0'
          },
          {
            sha: '75e6b15199ac9ed63d705140f68c1b67e722ffc9',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message:
              "[now-client] Fix `ENOENT` regression in `now-client` (#3125)\n\nThis PR should fixes `ENOENT` related errors\r\n\r\n```\r\n> Error! ENOENT: no such file or directory, stat '.../node_modules/.bin/...'\r\n```\r\n\r\nRelated: https://github.com/zeit/now/issues/3104",
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/75e6b15199ac9ed63d705140f68c1b67e722ffc9'
          },
          {
            sha: 'a189e72fbe7cf80d35144f6fc569db777c051853',
            author: {
              email: 'AndyBitz@users.noreply.github.com',
              name: 'Andy'
            },
            message:
              'Revert "[now-cli] Remove `dev: "now dev"` script detection logic in `now dev` (#3088)" (#3127)\n\nThis reverts commit 85170d7231b665ad0753af26fe6be5d173b8a8b0.',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/a189e72fbe7cf80d35144f6fc569db777c051853'
          },
          {
            sha: '06b9ff233e1ba8f8ae597e66a38a83180510664c',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message: 'Publish\n\n - now-client@5.1.1-canary.9',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/06b9ff233e1ba8f8ae597e66a38a83180510664c'
          },
          {
            sha: 'acb46cef142257f9630fea2f60a6ed65fb9f2b4a',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message: '[now-cli] Update readme (#3128)',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/acb46cef142257f9630fea2f60a6ed65fb9f2b4a'
          },
          {
            sha: 'e97314a3c79aff585f1fb9ef3fcab9d16220bd32',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message: 'Publish\n\n - now@16.1.4-canary.16',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/e97314a3c79aff585f1fb9ef3fcab9d16220bd32'
          },
          {
            sha: '49bd2439a7d7f835924f911f8ecff40b1c1b2918',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              '[now-build-utils] Fix typo occurres => occurs (#3132)\n\nFixes #2931',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/49bd2439a7d7f835924f911f8ecff40b1c1b2918'
          },
          {
            sha: 'd38e464bfe05796ca183eceb603bdc3303c0f399',
            author: {
              email: 'n@n8.io',
              name: 'Nathan Rajlich'
            },
            message:
              '[now-next] Exit dev server child processes upon SIGINT/SIGTERM (#3137)\n\nExplicitly send the SIGINT / SIGTERM signal to `now dev` server child processes, so that they are not left running when running the now-dev unit tests.\n\nRelated to #3113 which has hanging unit tests that never "complete".',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/d38e464bfe05796ca183eceb603bdc3303c0f399'
          },
          {
            sha: '630ec06d48eb868c768abe2c9973f9cf696af66d',
            author: {
              email: 'n@n8.io',
              name: 'Nathan Rajlich'
            },
            message:
              '[now-static-build] Exit dev server child processes upon SIGINT/SIGTERM (#3136)\n\nExplicitly send the SIGINT / SIGTERM signal to `now dev` server child processes, so that they are not left running when running the now-dev unit tests.\n\nRelated to #3113 which has hanging unit tests that never "complete".',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/630ec06d48eb868c768abe2c9973f9cf696af66d'
          },
          {
            sha: 'dbf9c5c46b47499a30799d104b2dbb5b05724b1a',
            author: {
              email: 'nathan@tootallnate.net',
              name: 'Nathan Rajlich'
            },
            message:
              'Publish\n\n - @now/build-utils@1.0.0-canary.10\n - @now/next@1.0.0-canary.10\n - @now/static-build@0.9.9-canary.13',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/dbf9c5c46b47499a30799d104b2dbb5b05724b1a'
          },
          {
            sha: 'c4bee64abda9051c8a3f8f59c222fc864647ead2',
            author: {
              email: 'n@n8.io',
              name: 'Nathan Rajlich'
            },
            message:
              "[now-cli] Set the builder's debug env var based on `DevServer.debug` (#3139)\n\nThis makes it so that a programatically created `DevServer` instance that has `debug` mode enabled also gets set on the builder child processes as expected, rather than only when invoked via CLI.\n\nFor example, the `dev-server.unit.js` tests can set `debug: true` and with this change the builder child processes will also have debug logs enabled. See [here](https://git.io/JeW0O).",
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/c4bee64abda9051c8a3f8f59c222fc864647ead2'
          },
          {
            sha: 'c1b2da1d57ff61f318a97efe41d11bb7f7994424',
            author: {
              email: 'joe.haddad@zeit.co',
              name: 'Joe Haddad'
            },
            message:
              '[now-build-utils] Allow a null `fallback` in `Prerender` (#3144)\n\nThis allows a `null` `fallback` to be provided to a `Prerender`. The use case is a lazily prerendered route (often meaning dynamically rendered).',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/c1b2da1d57ff61f318a97efe41d11bb7f7994424'
          },
          {
            sha: '3aecb0905a9e9126a3ef41359dd1d768881ee189',
            author: {
              email: 'jj@jjsweb.site',
              name: 'JJ Kasper'
            },
            message:
              '[now-next] Add support for src dir in now-dev (#3140)\n\nFixes: #3133\r\nFixes: https://github.com/zeit/next.js/issues/9007',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/3aecb0905a9e9126a3ef41359dd1d768881ee189'
          },
          {
            sha: 'de48e28fa12303e6f1cd2bfb76cf285769a3bdae',
            author: {
              email: 'jj@jjsweb.site',
              name: 'JJ Kasper'
            },
            message:
              'Publish\n\n - @now/build-utils@1.0.0-canary.11\n - now@16.1.4-canary.17\n - @now/next@1.0.0-canary.11',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/de48e28fa12303e6f1cd2bfb76cf285769a3bdae'
          }
        ]
      },
      public: true,
      created_at: '2019-10-11T16:09:47Z',
      org: {
        id: 14985020,
        login: 'zeit',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/zeit',
        avatar_url: 'https://avatars.githubusercontent.com/u/14985020?'
      }
    },
    {
      id: '10611924743',
      type: 'PushEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 170126860,
        name: 'Timer/next.js',
        url: 'https://api.github.com/repos/Timer/next.js'
      },
      payload: {
        push_id: 4139400926,
        size: 7,
        distinct_size: 7,
        ref: 'refs/heads/canary',
        head: '58cc1d3be49f297ccd4c6fba236429b22906b5ef',
        before: '9ff7339e0d55fafc68bd39d01ad1e57b99c38366',
        commits: [
          {
            sha: '5b574fc77875ee1988b94504727282eef1b70dcb',
            author: {
              email: 'jj@jjsweb.site',
              name: 'JJ Kasper'
            },
            message:
              'Update to error on usage of serverRuntimeConfig with serverless (#9030)\n\n* Update to error on usage of serverRuntimeConfig with serverless\r\n\r\n* Add tests for errors for serverless and runtime configs\r\n\r\n* Update docs wording',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/5b574fc77875ee1988b94504727282eef1b70dcb'
          },
          {
            sha: 'f10f3304fe3926b69ad01fdf76e4ae1fbafaf141',
            author: {
              email: 'luis@zeit.co',
              name: 'Luis Alvarez D'
            },
            message: 'Replace the deprecated Create Next App URL (#9032)',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/f10f3304fe3926b69ad01fdf76e4ae1fbafaf141'
          },
          {
            sha: 'c941b6129c1c94c9e46dda81c8092181edea5c88',
            author: {
              email: 'jj@jjsweb.site',
              name: 'JJ Kasper'
            },
            message: 'Trigger error overlay for dynamic route mismatch (#9031)',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/c941b6129c1c94c9e46dda81c8092181edea5c88'
          },
          {
            sha: '6c9fa8662cf0a9619a46409f831a4d8b4bf710db',
            author: {
              email: 'luis@zeit.co',
              name: 'Luis Alvarez D'
            },
            message: 'Updated multiple examples to use /public (#9033)',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/6c9fa8662cf0a9619a46409f831a4d8b4bf710db'
          },
          {
            sha: '9b0ec37f246495f9ad2f5b0921ddfb5f55fb6eeb',
            author: {
              email: 'rafaelalmeidatk@gmail.com',
              name: 'Rafael Almeida'
            },
            message:
              'Update storybook example to v5.2 with CSF (#9036)\n\n* Update storybook example to v5.2 with CSF\r\n\r\n* Fix linter errors',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/9b0ec37f246495f9ad2f5b0921ddfb5f55fb6eeb'
          },
          {
            sha: 'a3b990a52a47cb8c8d7d85823bae9ee81c5f03b0',
            author: {
              email: 'gregamezzo@gmail.com',
              name: 'Serhii'
            },
            message: 'Update README.md (#9040)',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/a3b990a52a47cb8c8d7d85823bae9ee81c5f03b0'
          },
          {
            sha: '58cc1d3be49f297ccd4c6fba236429b22906b5ef',
            author: {
              email: 'timer150@gmail.com',
              name: 'Joe Haddad'
            },
            message:
              'Remove static optimization from message (#9045)\n\n* Remove static optimization from message\nThis check does not pertain to automatic static optimization.\n\nCloses https://github.com/zeit/next.js/issues/9042\n\n* Update help message',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/58cc1d3be49f297ccd4c6fba236429b22906b5ef'
          }
        ]
      },
      public: true,
      created_at: '2019-10-11T15:20:52Z'
    }
  ],
  gists: [
    {
      url: 'https://api.github.com/gists/d6b040465a1e15b67ee3',
      forks_url: 'https://api.github.com/gists/d6b040465a1e15b67ee3/forks',
      commits_url: 'https://api.github.com/gists/d6b040465a1e15b67ee3/commits',
      id: 'd6b040465a1e15b67ee3',
      node_id: 'MDQ6R2lzdGQ2YjA0MDQ2NWExZTE1YjY3ZWUz',
      git_pull_url: 'https://gist.github.com/d6b040465a1e15b67ee3.git',
      git_push_url: 'https://gist.github.com/d6b040465a1e15b67ee3.git',
      html_url: 'https://gist.github.com/d6b040465a1e15b67ee3',
      public: true,
      created_at: '2016-01-19T05:04:00Z',
      updated_at: '2016-03-23T21:03:11Z',
      description:
        'Code for blog post http://www.invokestatic.com/2016/01/17/cuda-1/',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/d6b040465a1e15b67ee3/comments',
      owner: {
        login: 'Timer',
        id: 616428,
        node_id: 'MDQ6VXNlcjYxNjQyOA==',
        avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        html_url: 'https://github.com/Timer',
        followers_url: 'https://api.github.com/users/Timer/followers',
        following_url:
          'https://api.github.com/users/Timer/following{/other_user}',
        gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Timer/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Timer/subscriptions',
        organizations_url: 'https://api.github.com/users/Timer/orgs',
        repos_url: 'https://api.github.com/users/Timer/repos',
        events_url: 'https://api.github.com/users/Timer/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Timer/received_events',
        type: 'User',
        site_admin: false
      },
      truncated: false
    },
    {
      url: 'https://api.github.com/gists/22477abc81c724c1994f',
      forks_url: 'https://api.github.com/gists/22477abc81c724c1994f/forks',
      commits_url: 'https://api.github.com/gists/22477abc81c724c1994f/commits',
      id: '22477abc81c724c1994f',
      node_id: 'MDQ6R2lzdDIyNDc3YWJjODFjNzI0YzE5OTRm',
      git_pull_url: 'https://gist.github.com/22477abc81c724c1994f.git',
      git_push_url: 'https://gist.github.com/22477abc81c724c1994f.git',
      html_url: 'https://gist.github.com/22477abc81c724c1994f',
      public: true,
      created_at: '2016-01-12T02:31:15Z',
      updated_at: '2016-01-12T03:03:33Z',
      description: '1:1 EBS and EC2 instance creation',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/22477abc81c724c1994f/comments',
      owner: {
        login: 'Timer',
        id: 616428,
        node_id: 'MDQ6VXNlcjYxNjQyOA==',
        avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        html_url: 'https://github.com/Timer',
        followers_url: 'https://api.github.com/users/Timer/followers',
        following_url:
          'https://api.github.com/users/Timer/following{/other_user}',
        gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Timer/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Timer/subscriptions',
        organizations_url: 'https://api.github.com/users/Timer/orgs',
        repos_url: 'https://api.github.com/users/Timer/repos',
        events_url: 'https://api.github.com/users/Timer/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Timer/received_events',
        type: 'User',
        site_admin: false
      },
      truncated: false
    },
    {
      url: 'https://api.github.com/gists/84cf3798b568136a4745',
      forks_url: 'https://api.github.com/gists/84cf3798b568136a4745/forks',
      commits_url: 'https://api.github.com/gists/84cf3798b568136a4745/commits',
      id: '84cf3798b568136a4745',
      node_id: 'MDQ6R2lzdDg0Y2YzNzk4YjU2ODEzNmE0NzQ1',
      git_pull_url: 'https://gist.github.com/84cf3798b568136a4745.git',
      git_push_url: 'https://gist.github.com/84cf3798b568136a4745.git',
      html_url: 'https://gist.github.com/84cf3798b568136a4745',
      public: true,
      created_at: '2016-01-08T07:44:57Z',
      updated_at: '2016-01-08T07:44:57Z',
      description: '',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/84cf3798b568136a4745/comments',
      owner: {
        login: 'Timer',
        id: 616428,
        node_id: 'MDQ6VXNlcjYxNjQyOA==',
        avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        html_url: 'https://github.com/Timer',
        followers_url: 'https://api.github.com/users/Timer/followers',
        following_url:
          'https://api.github.com/users/Timer/following{/other_user}',
        gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Timer/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Timer/subscriptions',
        organizations_url: 'https://api.github.com/users/Timer/orgs',
        repos_url: 'https://api.github.com/users/Timer/repos',
        events_url: 'https://api.github.com/users/Timer/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Timer/received_events',
        type: 'User',
        site_admin: false
      },
      truncated: false
    }
  ]
};

const expectedResponse = {
  username: 'Timer',
  events: [
    {
      id: '10614311531',
      type: 'ReleaseEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 70107786,
        name: 'zeit/next.js',
        url: 'https://api.github.com/repos/zeit/next.js'
      },
      payload: {
        action: 'published',
        release: {
          url: 'https://api.github.com/repos/zeit/next.js/releases/20652603',
          assets_url:
            'https://api.github.com/repos/zeit/next.js/releases/20652603/assets',
          upload_url:
            'https://uploads.github.com/repos/zeit/next.js/releases/20652603/assets{?name,label}',
          html_url:
            'https://github.com/zeit/next.js/releases/tag/v9.1.2-canary.2',
          id: 20652603,
          node_id: 'MDc6UmVsZWFzZTIwNjUyNjAz',
          tag_name: 'v9.1.2-canary.2',
          target_commitish: '6efa1daf34278374a9c73937f80363d42cfacdca',
          name: 'v9.1.2-canary.2',
          draft: false,
          author: {
            login: 'Timer',
            id: 616428,
            node_id: 'MDQ6VXNlcjYxNjQyOA==',
            avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/Timer',
            html_url: 'https://github.com/Timer',
            followers_url: 'https://api.github.com/users/Timer/followers',
            following_url:
              'https://api.github.com/users/Timer/following{/other_user}',
            gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/Timer/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/Timer/subscriptions',
            organizations_url: 'https://api.github.com/users/Timer/orgs',
            repos_url: 'https://api.github.com/users/Timer/repos',
            events_url: 'https://api.github.com/users/Timer/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/Timer/received_events',
            type: 'User',
            site_admin: false
          },
          prerelease: true,
          created_at: '2019-10-11T21:25:34Z',
          published_at: '2019-10-11T21:26:42Z',
          assets: [],
          tarball_url:
            'https://api.github.com/repos/zeit/next.js/tarball/v9.1.2-canary.2',
          zipball_url:
            'https://api.github.com/repos/zeit/next.js/zipball/v9.1.2-canary.2',
          body:
            '### Patches \r\n\r\n- Add src directory support for global CSS: #8999\r\n- Update README-zh-CN.md static-file-serving-eg-images: #9002\r\n- Add CSS fixture for src dir: #9001\r\n- Fix global Bluebird causing HMR connection to fail: #9009\r\n- Change to public folder in with-loading example: #9016\r\n- Update Auth0 example with new version: #9020\r\n- Next offline: #9010\r\n- Test no-path relative CSS imports: #9028\r\n- Add buildId to SPR data routes: #8929\r\n- Do Not Rely on Module State: #8968\r\n- Add @zeit/fetch example: #9029\r\n- Update to error on usage of serverRuntimeConfig with serverless: #9030\r\n- Replace the deprecated Create Next App URL: #9032\r\n- Trigger error overlay for dynamic route mismatch: #9031\r\n- Updated multiple examples to use /public: #9033\r\n- Update storybook example to v5.2 with CSF: #9036\r\n- Update README.md: #9040\r\n- Remove static optimization from message: #9045\r\n\r\n### Credits \r\n\r\nHuge thanks to @ykzts, @manfwh, @ijjk, @ismamz, @sandrinodimattia, @armspkt, @timneutkens, @lfades, @rafaelalmeidatk, and @SZharkov for helping!'
        }
      },
      public: true,
      created_at: '2019-10-11T21:26:42Z',
      org: {
        id: 14985020,
        login: 'zeit',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/zeit',
        avatar_url: 'https://avatars.githubusercontent.com/u/14985020?'
      }
    },
    {
      id: '10614306834',
      type: 'CreateEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 70107786,
        name: 'zeit/next.js',
        url: 'https://api.github.com/repos/zeit/next.js'
      },
      payload: {
        ref: 'v9.1.2-canary.2',
        ref_type: 'tag',
        master_branch: 'canary',
        description: 'The React Framework',
        pusher_type: 'user'
      },
      public: true,
      created_at: '2019-10-11T21:25:48Z',
      org: {
        id: 14985020,
        login: 'zeit',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/zeit',
        avatar_url: 'https://avatars.githubusercontent.com/u/14985020?'
      }
    },
    {
      id: '10614306766',
      type: 'PushEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 70107786,
        name: 'zeit/next.js',
        url: 'https://api.github.com/repos/zeit/next.js'
      },
      payload: {
        push_id: 4140644605,
        size: 1,
        distinct_size: 1,
        ref: 'refs/heads/canary',
        head: '6efa1daf34278374a9c73937f80363d42cfacdca',
        before: '58cc1d3be49f297ccd4c6fba236429b22906b5ef',
        commits: [
          {
            sha: '6efa1daf34278374a9c73937f80363d42cfacdca',
            author: {
              email: 'joe.haddad@zeit.co',
              name: 'Joe Haddad'
            },
            message: 'v9.1.2-canary.2',
            distinct: true,
            url:
              'https://api.github.com/repos/zeit/next.js/commits/6efa1daf34278374a9c73937f80363d42cfacdca'
          }
        ]
      },
      public: true,
      created_at: '2019-10-11T21:25:48Z',
      org: {
        id: 14985020,
        login: 'zeit',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/zeit',
        avatar_url: 'https://avatars.githubusercontent.com/u/14985020?'
      }
    },
    {
      id: '10612303489',
      type: 'PushEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 67753070,
        name: 'zeit/now',
        url: 'https://api.github.com/repos/zeit/now'
      },
      payload: {
        push_id: 4139598415,
        size: 23,
        distinct_size: 1,
        ref: 'refs/heads/now-next/spr-support',
        head: '4badb25b48fb353ae13f69dd4c1d4a9b672f8a64',
        before: 'c0fd4e4d7b14ae171f71ad6c1138d4218b4b89dc',
        commits: [
          {
            sha: 'c3020e30710003095f21dfec8e8d42d0a8ccbdc2',
            author: {
              email: 'offero@users.noreply.github.com',
              name: 'Chris'
            },
            message:
              '[now-python] Encode body as utf-8 before making a request (#3093)\n\nFixes #3091',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/c3020e30710003095f21dfec8e8d42d0a8ccbdc2'
          },
          {
            sha: 'd9bb6c8a54b298b2cbd8420b366e7a4ae7029dcc',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              "[now-cli][now-client] Fix `--local-config` flag and `files` key (#3117)\n\nThis PR is a followup to #3110 that fixes the first deployment when using the `--local-config` flag and also fixes v1 deployments using the [`files`](https://zeit.co/docs/v1/features/configuration/#files-(array)) key.\r\n\r\nThe tests have been adjusted so we don't regress in both cases.\r\n\r\nFixes #3099 \r\nFixes #3105\r\nFixes #3107\r\nFixes #3109\r\n\r\n[PRODUCT-350] #close\n\n[PRODUCT-350]: https://zeit.atlassian.net/browse/PRODUCT-350",
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/d9bb6c8a54b298b2cbd8420b366e7a4ae7029dcc'
          },
          {
            sha: 'e4d691eda1f7dc79202a23a5c6bc0433c0e411a2',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              'Publish\n\n - now@16.1.4-canary.14\n - now-client@5.1.1-canary.7\n - @now/next@1.0.0-canary.9\n - @now/python@0.2.17-canary.5\n - @now/static-build@0.9.9-canary.12',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/e4d691eda1f7dc79202a23a5c6bc0433c0e411a2'
          },
          {
            sha: '6398ef194cedd74777c38ab1aa9d99e2838b5bcd',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message:
              '[now-client] [now-cli] Handle `notice` type (#3122)\n\nThis PR handle `notice` type from API respond.',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/6398ef194cedd74777c38ab1aa9d99e2838b5bcd'
          },
          {
            sha: '1fe8317f1e587d2d30aa8560faa4feacce934988',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              '[now-cli][now-client] Fix v1 `files` when defining a directory (#3123)\n\nThis is a follow up to #3117 which added a fix for `files` but did not observe directories.\r\n\r\nThis PR fixes the scenario where a directory is defined such that all files inside the directory should be added uploaded (recursively).\r\n\r\nThanks to @williamli \r\n\r\n[PRODUCT-350] #close\r\n\r\n[PRODUCT-350]: https://zeit.atlassian.net/browse/PRODUCT-350',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/1fe8317f1e587d2d30aa8560faa4feacce934988'
          },
          {
            sha: 'eeffb550214981467fdfe8e2dfbadf3fea936d08',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              'Publish\n\n - now@16.1.4-canary.15\n - now-client@5.1.1-canary.8',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/eeffb550214981467fdfe8e2dfbadf3fea936d08'
          },
          {
            sha: '85170d7231b665ad0753af26fe6be5d173b8a8b0',
            author: {
              email: 'n@n8.io',
              name: 'Nathan Rajlich'
            },
            message:
              '[now-cli] Remove `dev: "now dev"` script detection logic in `now dev` (#3088)\n\nAs of https://github.com/zeit/now-builders/pull/679, this logic is unnecessary because the `@now/static-build` builder will never end up executing the `dev` script when there is a `now.json` file present (and thus, no builds present, aka zero config mode).\n\nAlso, statically detecting the `now dev` command from the script command is brittle, as the command could execute a separate shell script that ends up executing `now dev` (and this detection logic would be a false negative).',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/85170d7231b665ad0753af26fe6be5d173b8a8b0'
          },
          {
            sha: '75e6b15199ac9ed63d705140f68c1b67e722ffc9',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message:
              "[now-client] Fix `ENOENT` regression in `now-client` (#3125)\n\nThis PR should fixes `ENOENT` related errors\r\n\r\n```\r\n> Error! ENOENT: no such file or directory, stat '.../node_modules/.bin/...'\r\n```\r\n\r\nRelated: https://github.com/zeit/now/issues/3104",
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/75e6b15199ac9ed63d705140f68c1b67e722ffc9'
          },
          {
            sha: 'a189e72fbe7cf80d35144f6fc569db777c051853',
            author: {
              email: 'AndyBitz@users.noreply.github.com',
              name: 'Andy'
            },
            message:
              'Revert "[now-cli] Remove `dev: "now dev"` script detection logic in `now dev` (#3088)" (#3127)\n\nThis reverts commit 85170d7231b665ad0753af26fe6be5d173b8a8b0.',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/a189e72fbe7cf80d35144f6fc569db777c051853'
          },
          {
            sha: '06b9ff233e1ba8f8ae597e66a38a83180510664c',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message: 'Publish\n\n - now-client@5.1.1-canary.9',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/06b9ff233e1ba8f8ae597e66a38a83180510664c'
          },
          {
            sha: 'acb46cef142257f9630fea2f60a6ed65fb9f2b4a',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message: '[now-cli] Update readme (#3128)',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/acb46cef142257f9630fea2f60a6ed65fb9f2b4a'
          },
          {
            sha: 'e97314a3c79aff585f1fb9ef3fcab9d16220bd32',
            author: {
              email: 't.sophearak@gmail.com',
              name: 'Sophearak Tha'
            },
            message: 'Publish\n\n - now@16.1.4-canary.16',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/e97314a3c79aff585f1fb9ef3fcab9d16220bd32'
          },
          {
            sha: '49bd2439a7d7f835924f911f8ecff40b1c1b2918',
            author: {
              email: 'steven@ceriously.com',
              name: 'Steven'
            },
            message:
              '[now-build-utils] Fix typo occurres => occurs (#3132)\n\nFixes #2931',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/49bd2439a7d7f835924f911f8ecff40b1c1b2918'
          },
          {
            sha: 'd38e464bfe05796ca183eceb603bdc3303c0f399',
            author: {
              email: 'n@n8.io',
              name: 'Nathan Rajlich'
            },
            message:
              '[now-next] Exit dev server child processes upon SIGINT/SIGTERM (#3137)\n\nExplicitly send the SIGINT / SIGTERM signal to `now dev` server child processes, so that they are not left running when running the now-dev unit tests.\n\nRelated to #3113 which has hanging unit tests that never "complete".',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/d38e464bfe05796ca183eceb603bdc3303c0f399'
          },
          {
            sha: '630ec06d48eb868c768abe2c9973f9cf696af66d',
            author: {
              email: 'n@n8.io',
              name: 'Nathan Rajlich'
            },
            message:
              '[now-static-build] Exit dev server child processes upon SIGINT/SIGTERM (#3136)\n\nExplicitly send the SIGINT / SIGTERM signal to `now dev` server child processes, so that they are not left running when running the now-dev unit tests.\n\nRelated to #3113 which has hanging unit tests that never "complete".',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/630ec06d48eb868c768abe2c9973f9cf696af66d'
          },
          {
            sha: 'dbf9c5c46b47499a30799d104b2dbb5b05724b1a',
            author: {
              email: 'nathan@tootallnate.net',
              name: 'Nathan Rajlich'
            },
            message:
              'Publish\n\n - @now/build-utils@1.0.0-canary.10\n - @now/next@1.0.0-canary.10\n - @now/static-build@0.9.9-canary.13',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/dbf9c5c46b47499a30799d104b2dbb5b05724b1a'
          },
          {
            sha: 'c4bee64abda9051c8a3f8f59c222fc864647ead2',
            author: {
              email: 'n@n8.io',
              name: 'Nathan Rajlich'
            },
            message:
              "[now-cli] Set the builder's debug env var based on `DevServer.debug` (#3139)\n\nThis makes it so that a programatically created `DevServer` instance that has `debug` mode enabled also gets set on the builder child processes as expected, rather than only when invoked via CLI.\n\nFor example, the `dev-server.unit.js` tests can set `debug: true` and with this change the builder child processes will also have debug logs enabled. See [here](https://git.io/JeW0O).",
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/c4bee64abda9051c8a3f8f59c222fc864647ead2'
          },
          {
            sha: 'c1b2da1d57ff61f318a97efe41d11bb7f7994424',
            author: {
              email: 'joe.haddad@zeit.co',
              name: 'Joe Haddad'
            },
            message:
              '[now-build-utils] Allow a null `fallback` in `Prerender` (#3144)\n\nThis allows a `null` `fallback` to be provided to a `Prerender`. The use case is a lazily prerendered route (often meaning dynamically rendered).',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/c1b2da1d57ff61f318a97efe41d11bb7f7994424'
          },
          {
            sha: '3aecb0905a9e9126a3ef41359dd1d768881ee189',
            author: {
              email: 'jj@jjsweb.site',
              name: 'JJ Kasper'
            },
            message:
              '[now-next] Add support for src dir in now-dev (#3140)\n\nFixes: #3133\r\nFixes: https://github.com/zeit/next.js/issues/9007',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/3aecb0905a9e9126a3ef41359dd1d768881ee189'
          },
          {
            sha: 'de48e28fa12303e6f1cd2bfb76cf285769a3bdae',
            author: {
              email: 'jj@jjsweb.site',
              name: 'JJ Kasper'
            },
            message:
              'Publish\n\n - @now/build-utils@1.0.0-canary.11\n - now@16.1.4-canary.17\n - @now/next@1.0.0-canary.11',
            distinct: false,
            url:
              'https://api.github.com/repos/zeit/now/commits/de48e28fa12303e6f1cd2bfb76cf285769a3bdae'
          }
        ]
      },
      public: true,
      created_at: '2019-10-11T16:09:47Z',
      org: {
        id: 14985020,
        login: 'zeit',
        gravatar_id: '',
        url: 'https://api.github.com/orgs/zeit',
        avatar_url: 'https://avatars.githubusercontent.com/u/14985020?'
      }
    },
    {
      id: '10611924743',
      type: 'PushEvent',
      actor: {
        id: 616428,
        login: 'Timer',
        display_login: 'Timer',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        avatar_url: 'https://avatars.githubusercontent.com/u/616428?'
      },
      repo: {
        id: 170126860,
        name: 'Timer/next.js',
        url: 'https://api.github.com/repos/Timer/next.js'
      },
      payload: {
        push_id: 4139400926,
        size: 7,
        distinct_size: 7,
        ref: 'refs/heads/canary',
        head: '58cc1d3be49f297ccd4c6fba236429b22906b5ef',
        before: '9ff7339e0d55fafc68bd39d01ad1e57b99c38366',
        commits: [
          {
            sha: '5b574fc77875ee1988b94504727282eef1b70dcb',
            author: {
              email: 'jj@jjsweb.site',
              name: 'JJ Kasper'
            },
            message:
              'Update to error on usage of serverRuntimeConfig with serverless (#9030)\n\n* Update to error on usage of serverRuntimeConfig with serverless\r\n\r\n* Add tests for errors for serverless and runtime configs\r\n\r\n* Update docs wording',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/5b574fc77875ee1988b94504727282eef1b70dcb'
          },
          {
            sha: 'f10f3304fe3926b69ad01fdf76e4ae1fbafaf141',
            author: {
              email: 'luis@zeit.co',
              name: 'Luis Alvarez D'
            },
            message: 'Replace the deprecated Create Next App URL (#9032)',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/f10f3304fe3926b69ad01fdf76e4ae1fbafaf141'
          },
          {
            sha: 'c941b6129c1c94c9e46dda81c8092181edea5c88',
            author: {
              email: 'jj@jjsweb.site',
              name: 'JJ Kasper'
            },
            message: 'Trigger error overlay for dynamic route mismatch (#9031)',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/c941b6129c1c94c9e46dda81c8092181edea5c88'
          },
          {
            sha: '6c9fa8662cf0a9619a46409f831a4d8b4bf710db',
            author: {
              email: 'luis@zeit.co',
              name: 'Luis Alvarez D'
            },
            message: 'Updated multiple examples to use /public (#9033)',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/6c9fa8662cf0a9619a46409f831a4d8b4bf710db'
          },
          {
            sha: '9b0ec37f246495f9ad2f5b0921ddfb5f55fb6eeb',
            author: {
              email: 'rafaelalmeidatk@gmail.com',
              name: 'Rafael Almeida'
            },
            message:
              'Update storybook example to v5.2 with CSF (#9036)\n\n* Update storybook example to v5.2 with CSF\r\n\r\n* Fix linter errors',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/9b0ec37f246495f9ad2f5b0921ddfb5f55fb6eeb'
          },
          {
            sha: 'a3b990a52a47cb8c8d7d85823bae9ee81c5f03b0',
            author: {
              email: 'gregamezzo@gmail.com',
              name: 'Serhii'
            },
            message: 'Update README.md (#9040)',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/a3b990a52a47cb8c8d7d85823bae9ee81c5f03b0'
          },
          {
            sha: '58cc1d3be49f297ccd4c6fba236429b22906b5ef',
            author: {
              email: 'timer150@gmail.com',
              name: 'Joe Haddad'
            },
            message:
              'Remove static optimization from message (#9045)\n\n* Remove static optimization from message\nThis check does not pertain to automatic static optimization.\n\nCloses https://github.com/zeit/next.js/issues/9042\n\n* Update help message',
            distinct: true,
            url:
              'https://api.github.com/repos/Timer/next.js/commits/58cc1d3be49f297ccd4c6fba236429b22906b5ef'
          }
        ]
      },
      public: true,
      created_at: '2019-10-11T15:20:52Z'
    }
  ],
  gists: [
    {
      url: 'https://api.github.com/gists/d6b040465a1e15b67ee3',
      forks_url: 'https://api.github.com/gists/d6b040465a1e15b67ee3/forks',
      commits_url: 'https://api.github.com/gists/d6b040465a1e15b67ee3/commits',
      id: 'd6b040465a1e15b67ee3',
      node_id: 'MDQ6R2lzdGQ2YjA0MDQ2NWExZTE1YjY3ZWUz',
      git_pull_url: 'https://gist.github.com/d6b040465a1e15b67ee3.git',
      git_push_url: 'https://gist.github.com/d6b040465a1e15b67ee3.git',
      html_url: 'https://gist.github.com/d6b040465a1e15b67ee3',
      public: true,
      created_at: '2016-01-19T05:04:00Z',
      updated_at: '2016-03-23T21:03:11Z',
      description:
        'Code for blog post http://www.invokestatic.com/2016/01/17/cuda-1/',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/d6b040465a1e15b67ee3/comments',
      owner: {
        login: 'Timer',
        id: 616428,
        node_id: 'MDQ6VXNlcjYxNjQyOA==',
        avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        html_url: 'https://github.com/Timer',
        followers_url: 'https://api.github.com/users/Timer/followers',
        following_url:
          'https://api.github.com/users/Timer/following{/other_user}',
        gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Timer/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Timer/subscriptions',
        organizations_url: 'https://api.github.com/users/Timer/orgs',
        repos_url: 'https://api.github.com/users/Timer/repos',
        events_url: 'https://api.github.com/users/Timer/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Timer/received_events',
        type: 'User',
        site_admin: false
      },
      truncated: false
    },
    {
      url: 'https://api.github.com/gists/22477abc81c724c1994f',
      forks_url: 'https://api.github.com/gists/22477abc81c724c1994f/forks',
      commits_url: 'https://api.github.com/gists/22477abc81c724c1994f/commits',
      id: '22477abc81c724c1994f',
      node_id: 'MDQ6R2lzdDIyNDc3YWJjODFjNzI0YzE5OTRm',
      git_pull_url: 'https://gist.github.com/22477abc81c724c1994f.git',
      git_push_url: 'https://gist.github.com/22477abc81c724c1994f.git',
      html_url: 'https://gist.github.com/22477abc81c724c1994f',
      public: true,
      created_at: '2016-01-12T02:31:15Z',
      updated_at: '2016-01-12T03:03:33Z',
      description: '1:1 EBS and EC2 instance creation',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/22477abc81c724c1994f/comments',
      owner: {
        login: 'Timer',
        id: 616428,
        node_id: 'MDQ6VXNlcjYxNjQyOA==',
        avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        html_url: 'https://github.com/Timer',
        followers_url: 'https://api.github.com/users/Timer/followers',
        following_url:
          'https://api.github.com/users/Timer/following{/other_user}',
        gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Timer/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Timer/subscriptions',
        organizations_url: 'https://api.github.com/users/Timer/orgs',
        repos_url: 'https://api.github.com/users/Timer/repos',
        events_url: 'https://api.github.com/users/Timer/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Timer/received_events',
        type: 'User',
        site_admin: false
      },
      truncated: false
    },
    {
      url: 'https://api.github.com/gists/84cf3798b568136a4745',
      forks_url: 'https://api.github.com/gists/84cf3798b568136a4745/forks',
      commits_url: 'https://api.github.com/gists/84cf3798b568136a4745/commits',
      id: '84cf3798b568136a4745',
      node_id: 'MDQ6R2lzdDg0Y2YzNzk4YjU2ODEzNmE0NzQ1',
      git_pull_url: 'https://gist.github.com/84cf3798b568136a4745.git',
      git_push_url: 'https://gist.github.com/84cf3798b568136a4745.git',
      html_url: 'https://gist.github.com/84cf3798b568136a4745',
      public: true,
      created_at: '2016-01-08T07:44:57Z',
      updated_at: '2016-01-08T07:44:57Z',
      description: '',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/84cf3798b568136a4745/comments',
      owner: {
        login: 'Timer',
        id: 616428,
        node_id: 'MDQ6VXNlcjYxNjQyOA==',
        avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        html_url: 'https://github.com/Timer',
        followers_url: 'https://api.github.com/users/Timer/followers',
        following_url:
          'https://api.github.com/users/Timer/following{/other_user}',
        gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Timer/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Timer/subscriptions',
        organizations_url: 'https://api.github.com/users/Timer/orgs',
        repos_url: 'https://api.github.com/users/Timer/repos',
        events_url: 'https://api.github.com/users/Timer/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Timer/received_events',
        type: 'User',
        site_admin: false
      },
      truncated: false
    }
  ]
};

module.exports = {
  githubResponse,
  expectedResponse
};
