var documenterSearchIndex = {"docs":
[{"location":"docs/gvf.html#GVFs-1","page":"GVF","title":"GVFs","text":"","category":"section"},{"location":"docs/gvf.html#","page":"GVF","title":"GVF","text":"CurrentModule = RLCore","category":"page"},{"location":"docs/gvf.html#","page":"GVF","title":"GVF","text":"Modules = [RLCore]\nPages   = [\"gvf.jl\", \"gvf/cumulant.jl\", \"gvf/discount.jl\", \"gvf/policy.jl\"]","category":"page"},{"location":"docs/gvf.html#RLCore.GVF","page":"GVF","title":"RLCore.GVF","text":"GVF{C<:AbstractCumulant, D<:AbstractDiscount, P<:AbstractPolicy} <: AbstractGVF\n\nA realized version of a GVF where the cumulant, discount, and policies can be any structure following the AbstractCumulant, AbstractDiscount, or AbstractPolicy api respectively.\n\n\n\n\n\n","category":"type"},{"location":"docs/gvf.html#RLCore.Horde","page":"GVF","title":"RLCore.Horde","text":"Horde{T<:AbstractGVF} <: AbstractHorde\n\nThe simplest implementation of a horde as a collection of AbstractGVFs.\n\n\n\n\n\n","category":"type"},{"location":"docs/gvf.html#RLCore.AbstractGVF","page":"GVF","title":"RLCore.AbstractGVF","text":"AbstractGVF\n\nThis is the base type for a General Value Function. See the \"Horde: A scalable real-time architecture for learning knowledge from unsupervised sensorimotor interaction\" paper for more details.\n\n\n\n\n\n","category":"type"},{"location":"docs/gvf.html#RLCore.AbstractHorde","page":"GVF","title":"RLCore.AbstractHorde","text":"AbstractHorde\n\nAn abstract collection of GVFs.\n\n\n\n\n\n","category":"type"},{"location":"docs/gvf.html#Base.get-Tuple{RLCore.AbstractGVF,Any,Any,Any,Any,Any}","page":"GVF","title":"Base.get","text":"get(gvf::AbstractGVF, state_t, action_t, state_tp1, action_tp1, preds_tp1)\n\nGet the parameters for the cumulant, discount, and probability of taking an action given the parameters.\n\n\n\n\n\n","category":"method"},{"location":"docs/gvf.html#Base.get-Tuple{RLCore.AbstractGVF,Any,Any,Any,Any}","page":"GVF","title":"Base.get","text":"get(gvf::AbstractGVF, state_t, action_t, state_tp1, preds_tp1)\n\nConvenience function: get(gvf, state_t, action_t, state_tp1, nothing, preds_tp1)\n\n\n\n\n\n","category":"method"},{"location":"docs/gvf.html#Base.get-Tuple{RLCore.AbstractGVF,Any,Any,Any}","page":"GVF","title":"Base.get","text":"get(gvf::AbstractGVF, state_t, action_t, state_tp1)\n\nConvenience function: get(gvf, state_t, action_t, state_tp1, nothing, nothing)\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#Environment-1","page":"Environments","title":"Environment","text":"","category":"section"},{"location":"docs/environments.html#","page":"Environments","title":"Environments","text":"CurrentModule = RLCore","category":"page"},{"location":"docs/environments.html#","page":"Environments","title":"Environments","text":"Modules = [RLCore]\nPages   = [\"environment.jl\"]","category":"page"},{"location":"docs/environments.html#RLCore.AbstractEnvironment","page":"Environments","title":"RLCore.AbstractEnvironment","text":"Represents an abstract environment for reinforcement learning agents. Has several functions that need to be implemented to work.  All interfaces expect an abstract environment!\n\n\n\n\n\n","category":"type"},{"location":"docs/environments.html#RLCore.get_actions-Tuple{AbstractEnvironment}","page":"Environments","title":"RLCore.get_actions","text":"get_actions(env::AbstractEnvironment)\n\nReturns the set of actions available to take.\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.get_reward-Tuple{AbstractEnvironment}","page":"Environments","title":"RLCore.get_reward","text":"get_reward(env::AbstractEnvironment)\n\nRetrieve reward for the current state of the environment.\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.is_terminal-Tuple{AbstractEnvironment}","page":"Environments","title":"RLCore.is_terminal","text":"is_terminal(env::AbstractEnvironment)\n\nCheck if the environment is in a terminal state\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.start!-Tuple{AbstractEnvironment,Any}","page":"Environments","title":"RLCore.start!","text":"start!(env::AbstractEnvironment, start_state; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.start!-Tuple{AbstractEnvironment,Random.AbstractRNG}","page":"Environments","title":"RLCore.start!","text":"start!(env::AbstractEnvironment, rng::AbstractRNG; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.start!-Tuple{AbstractEnvironment}","page":"Environments","title":"RLCore.start!","text":"start!(env::AbstractEnvironment; kwargs...)\n\nFunction to start the passed environment env. There are three variants. Two which start the environment from a random start state (as implemented with reset!) and another which starts the environment from a provided start state. These three variants call the reset! functions of the same call signiture.\n\nReturns the starting state of the environment.\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.step!-Tuple{AbstractEnvironment,Any,Random.AbstractRNG}","page":"Environments","title":"RLCore.step!","text":"step!(env::AbstractEnvironment, action, rng::AbstractRNG; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.step!-Tuple{AbstractEnvironment,Any}","page":"Environments","title":"RLCore.step!","text":"step!(env::AbstractEnvironment, action; kwargs...)\n\nUpdate the state of the passed environment env based on the underlying dynamics and the action.\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.environment_step!-Tuple{AbstractEnvironment,Any,Random.AbstractRNG}","page":"Environments","title":"RLCore.environment_step!","text":"environment_step!(env::AbstractEnvironment, action, rng::AbstractRNG; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.environment_step!-Tuple{AbstractEnvironment,Any}","page":"Environments","title":"RLCore.environment_step!","text":"environment_step!(env::AbstractEnvironment, action; kwargs...)\n\nUpdate the state of the environment based on the underlying dynamics and the action. This is not used directly, but through the step function.\n\nYou can implement with or without a personally defined RNG. If you choose to not implement with a personally maintained RNG remember this is not a thread safe function.\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.get_state-Tuple{AbstractEnvironment}","page":"Environments","title":"RLCore.get_state","text":"get_state(env::AbstractEnvironment)\n\nRetrieve the current state of the environment\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.reset!-Tuple{AbstractEnvironment,Any}","page":"Environments","title":"RLCore.reset!","text":"reset!(env::AbstractEnvironment, start_state; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.reset!-Tuple{AbstractEnvironment,Random.AbstractRNG}","page":"Environments","title":"RLCore.reset!","text":"reset!(env::AbstractEnvironment, rng::AbstractRNG; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/environments.html#RLCore.reset!-Tuple{AbstractEnvironment}","page":"Environments","title":"RLCore.reset!","text":"reset!(env::AbstractEnvironment; kwargs...)\n\nReset the environment to initial conditions based on the random number generator.\n\nYou can implement with or without a personally defined RNG. If you choose to not implement with a personally maintained RNG remember this is not a thread safe function.\n\n\n\n\n\n","category":"method"},{"location":"docs/learning.html#Learning-1","page":"Learning","title":"Learning","text":"","category":"section"},{"location":"docs/agents.html#Agents-1","page":"Agents","title":"Agents","text":"","category":"section"},{"location":"docs/agents.html#","page":"Agents","title":"Agents","text":"CurrentModule = RLCore","category":"page"},{"location":"docs/agents.html#","page":"Agents","title":"Agents","text":"Modules = [RLCore]\nPages   = [\"agent.jl\"]","category":"page"},{"location":"docs/agents.html#RLCore.get_action-Tuple{AbstractAgent,Any,Random.AbstractRNG}","page":"Agents","title":"RLCore.get_action","text":"get_action(agent::AbstractAgent, state, rng::AbstractRNG; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/agents.html#RLCore.get_action-Tuple{AbstractAgent,Any}","page":"Agents","title":"RLCore.get_action","text":"get_action(agent::AbstractAgent, state; kwargs...)\n\nReturns an action, deterministacally.\n\n\n\n\n\n","category":"method"},{"location":"docs/agents.html#RLCore.start!-Tuple{AbstractAgent,Any,Random.AbstractRNG}","page":"Agents","title":"RLCore.start!","text":"start!(agent::AbstractAgent, env_s_tp1, rng=Random.GLOBAL_RNG, kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/agents.html#RLCore.start!-Tuple{AbstractAgent,Any}","page":"Agents","title":"RLCore.start!","text":"start!(agent::AbstractAgent, env_s_tp1, rng=Random.GLOBAL_RNG, kwargs...)\n\nFunction for starting the agent for a new episode.\n\nreturns an action to get passed to the environment\n\n\n\n\n\n","category":"method"},{"location":"docs/agents.html#RLCore.step!-Tuple{AbstractAgent,Any,Any,Any,Random.AbstractRNG}","page":"Agents","title":"RLCore.step!","text":"step!(agent::AbstractAgent, env_s_tp1, r, terminal, rng::AbstractRNG; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"docs/agents.html#RLCore.step!-Tuple{AbstractAgent,Any,Any,Any}","page":"Agents","title":"RLCore.step!","text":"step!(agent::AbstractAgent, env_s_tp1, r, terminal; kwargs...)\n\nFunction to take a step with an agent. \n\nReturns an action to get passed to the environment.\n\n\n\n\n\n","category":"method"},{"location":"manual/environment.html#Using-the-Environment-API-1","page":"Environments","title":"Using the Environment API","text":"","category":"section"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"This document serves as a guide in how to implement and use the AbstractEnvironment API. You can find full documentation in the documentation section. Some of these details are out of date but will be updated after the API stabilizes.","category":"page"},{"location":"manual/environment.html#Implementing-a-new-environment-1","page":"Environments","title":"Implementing a new environment","text":"","category":"section"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"We are going to implement the Mountain Car in this document to get used to how we take advantage of the API, and some of the functionality we get by implementing the full API!","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"I often create a module which contains several environment constants (which are consistent across all versions of this environment). You can also accomplish this by creating a few functions for the type to inline these values, and many other ways. You want to make sure to declare these global variables constant to get nice compiler optimizations for global scope variables. There are also other ways of handling this such as: creating inline functions return the values you care about, others...","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"module MountainCarConst\nconst vel_limit = (-0.07, 0.07)\nconst pos_limit = (-1.2, 0.5)\nconst pos_initial_range = (-0.6, 0.4)\n\nconst Reverse=1\nconst Neutral=2\nconst Accelerate=3\nend","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"We create the initial MountainCar struct which is a subtype of AbstractEnvironment. There are several functions we must implement if we want to take advantage of the RLCore API.","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"RLCore.reset!\nRLCore.environment_step!","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"mutable struct MountainCar <: RLCore.AbstractEnvironment\n    pos::Float64\n    vel::Float64\n    actions::AbstractSet\n    normalized::Bool\n    function MountainCar(pos=0.0, vel=0.0, normalized::Bool=false)\n        mcc = MountainCarConst\n        @boundscheck (pos >= mcc.pos_limit[1] && pos <= mcc.pos_limit[2])\n        @boundscheck (vel >= mcc.vel_limit[1] && vel <= mcc.vel_limit[2])\n        new(pos, vel, Set([mcc.Reverse, mcc.Neutral, mcc.Accelerate]), normalized)\n    end\nend","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"RLCore.get_actions(env::MountainCar) = env.actions\nvalid_action(env::MountainCar, action) = action in env.actions","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"function RLCore.reset!(env::MountainCar, rng::AbstractRNG; kwargs...)\n    env.pos = (rand(rng)*(MountainCarConst.pos_initial_range[2]\n                          - MountainCarConst.pos_initial_range[1])\n               + MountainCarConst.pos_initial_range[1])\n    env.vel = 0.0\nend\n\nfunction RLCore.reset!(env::MountainCar,\n                        start_state::T;\n                        kwargs...) where {T<:AbstractArray}\n    if env.normalized\n        env.pos = start_state[1]\n        env.vel = start_state[2]\n    else\n        pos_limit = MountainCarConst.pos_limit\n        vel_limit = MountainCarConst.vel_limit\n        env.pos = (start_state[1]*(pos_limit[2] - pos_limit[1])) + pos_limit[1]\n        env.vel = (start_state[2]*(vel_limit[2] - vel_limit[1])) + vel_limit[1]\n    end\nend","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"function RLCore.environment_step!(env::MountainCar,\n                                   action;\n                                   rng=Random.GLOBAL_RNG, kwargs...)\n    \n    @boundscheck valid_action(env, action)\n    env.vel =\n        clamp(env.vel + (action - 2)*0.001 - 0.0025*cos(3*env.pos),\n              MountainCarConst.vel_limit...)\n    env.pos = clamp(env.pos + env.vel,\n                    MountainCarConst.pos_limit...)\nend","category":"page"},{"location":"manual/environment.html#","page":"Environments","title":"Environments","text":"function RLCore.get_reward(env::MountainCar) # -> determines if the agent_state is terminal\n    if env.pos >= MountainCarConst.pos_limit[2]\n        return 0\n    end\n    return -1\nend\n\n\nfunction RLCore.is_terminal(env::MountainCar) # -> determines if the agent_state is terminal\n    return env.pos >= MountainCarConst.pos_limit[2]\nend\n\n\nfunction RLCore.get_state(env::MountainCar)\n    if env.normalized\n        return get_normalized_state(env)\n    else\n        return [env.pos, env.vel]\n    end\nend\n\n\nfunction get_normalized_state(env::MountainCar)\n    pos_limit = MountainCarConst.pos_limit\n    vel_limit = MountainCarConst.vel_limit\n    return [(env.pos - pos_limit[1])/(pos_limit[2] - pos_limit[1]),\n            (env.vel - vel_limit[1])/(vel_limit[2] - vel_limit[1])]\nend\n","category":"page"},{"location":"index.html#JuliaRL.jl-Documentation-WIP-1","page":"Home","title":"JuliaRL.jl Documentation - WIP","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"This documentation is still a work in progress. We should have a finalized version for the initial release on the Julia package system.","category":"page"},{"location":"docs/feature_creators.html#Feature-Constructors-1","page":"Feature Constructor","title":"Feature Constructors","text":"","category":"section"},{"location":"docs/feature_creators.html#","page":"Feature Constructor","title":"Feature Constructor","text":"CurrentModule = RLCore","category":"page"},{"location":"docs/feature_creators.html#","page":"Feature Constructor","title":"Feature Constructor","text":"Modules = [RLCore]\nPages   = [\"feature_constructors.jl\"]","category":"page"},{"location":"docs/feature_creators.html#RLCore.AbstractFeatureConstructor","page":"Feature Constructor","title":"RLCore.AbstractFeatureConstructor","text":"AbstractFeatureCreator\n\nAn abstract feature creator, for feature transformation from the states.\n\n\n\n\n\n","category":"type"},{"location":"docs/feature_creators.html#RLCore.create_features-Tuple{AbstractFeatureConstructor,Any,Any}","page":"Feature Constructor","title":"RLCore.create_features","text":"create_features(fc::AbstractFeatureCreator, s, a)\n\nActually create the features using actions and states\n\n\n\n\n\n","category":"method"},{"location":"docs/feature_creators.html#RLCore.create_features-Tuple{AbstractFeatureConstructor,Any}","page":"Feature Constructor","title":"RLCore.create_features","text":"create_features(fc::AbstractFeatureCreator, s)\n\nActually create the features using only states\n\n\n\n\n\n","category":"method"},{"location":"docs/feature_creators.html#RLCore.feature_size-Tuple{AbstractFeatureConstructor}","page":"Feature Constructor","title":"RLCore.feature_size","text":"feature_size(fc::AbstractFeatureCreator)\n\nGet size of feature vector the features assume exists.\n\n\n\n\n\n","category":"method"}]
}
